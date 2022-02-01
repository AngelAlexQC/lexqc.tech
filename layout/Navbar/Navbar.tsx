import Logo from 'components/Logo/Logo'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from './Navbar.module.css'

type Props = {
  logo: string
  height?: string
  title?: string
}

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
]

const Navbar: FunctionComponent<Props> = ({ logo, height, title }) => {
  const heightInNumber = height ? parseInt(height) : 49

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Logo
            src={logo}
            height={heightInNumber}
            width={heightInNumber}
            text={title}
          ></Logo>
        </a>
      </Link>
      <ul className={styles.links}>
        {routes.map(({ href, label }) => {
          return (
            <li className={styles.link} key={href}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
