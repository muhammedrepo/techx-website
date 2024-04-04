import 'bootstrap/dist/css/bootstrap.css'
import './scss/style.scss'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import CTABanner from '@/components/CTABanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Software Engineer Journey',
  description:
    'Discover captivating personal experiences from software engineers, celebrating the inspiring journey of this dynamic field.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <CTABanner />
        <Footer />
      </body>
    </html>
  )
}
