import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

interface Author {
  bio: string
  name: string
  id: string
  photo: {
    url: string
  }
}

interface Category {
  name: string
  slug: string
}

interface Post {
  author: Author
  createdAt: string
  slug: string
  title: string
  excerpt: string
  featuredImage: {
    url: string
  }
  category: Category
}

export interface Edge {
  node: Post
}

interface PostsConnection {
  edges: Edge[]
}

interface QueryResponse {
  postsConnection: PostsConnection
}

export const getPosts = async (): Promise<Edge[]> => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request<QueryResponse>(graphqlAPI, query)

  return result.postsConnection.edges
}
