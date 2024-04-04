'use client'

import Sidebar from './Sidebar'
import Link from 'next/link'
import { getPosts, Edge } from '@/app/api'
import { useEffect, useState } from 'react'

const AllNews = () => {
  const [data, setData] = useState<Edge[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPosts()
        setData(res)
        setLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An error occurred')
        }
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return 'Loading'
  if (error) return `Error: ${error}`

  return (
    <section className="blog-wrapper news-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="blog-posts">
              {data.map(({ node: post }) => (
                <div className="single-blog-post" key={post?.slug}>
                  <div
                    className="post-featured-thumb bg-cover"
                    style={{
                      backgroundImage: `url(${post?.featuredImage?.url})`,
                    }}></div>
                  <div className="post-content">
                    <h2>
                      <Link href={`/news/${post?.slug}`}>{post?.title}</Link>
                    </h2>
                    <div className="post-meta">
                      <span>
                        <i className="fal fa-calendar-alt"></i>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p>{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-30">
                      <div className="author-info">
                        <div
                          className="author-img"
                          style={{
                            backgroundImage: `url(${post.author.photo?.url})`,
                          }}></div>
                        <h5>
                          <a href="#">by {post.author.name}</a>
                        </h5>
                      </div>
                      <div className="post-link">
                        <Link href={`/news/${post.slug}`}>
                          <i className="fal fa-arrow-right"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="single-blog-post quote-post format-quote">
                <div className="post-content text-white bg-cover">
                  <div className="quote-content">
                    <div className="icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="quote-text">
                      <h2>
                        Excepteur sint occaecat cupida tat non proident, sunt
                        in.
                      </h2>
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-eye"></i>232 Views
                        </span>
                        <span>
                          <i className="fal fa-comments"></i>35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt"></i>24th March 2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-nav-wrap mt-60 text-center">
              <ul>
                <li>
                  <a href="#">
                    <i className="fal fa-long-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">01</a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">..</a>
                </li>
                <li>
                  <a href="#">10</a>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  )
}
export default AllNews
