'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LogoProps = {
  isFooter?: boolean
}
const Logo = ({ isFooter }: LogoProps) => {
  const pathname = usePathname()
  const logoWhite = pathname != '/' && pathname != '/news'

  return (
    <div className="logo">
      <Link href="/">
        <img
          src={`/img/${
            isFooter ? 'logo.png' : logoWhite ? 'logo-2.png' : 'logo.png'
          }`}
          alt="logo"
        />
      </Link>
    </div>
  )
}
export default Logo
