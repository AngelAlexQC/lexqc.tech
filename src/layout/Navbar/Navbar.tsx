import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';

type Props = {
  logo: string;
  height?: string;
  title?: string;
};

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
  {
    href: '/contact',
    label: 'Contact',
  },
];

const Navbar: FunctionComponent<Props> = ({ logo, height, title }) => {
  const heightInNumber = height ? parseInt(height) : 49;
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <a>
          <Logo
            src={logo}
            height={heightInNumber}
            width={heightInNumber}
            text={title}
          ></Logo>
        </a>
      </Link>
      <ul
        className={
          styles.links +
          ' ' +
          (router.asPath === '/contact' ? styles.contact_navbar : '')
        }
      >
        {routes.map(({ href, label }) => {
          return (
            <li key={href}>
              <Link href={href}>
                <a
                  className={
                    styles.link +
                    ' ' +
                    (router.asPath === href ? styles.active : '')
                  }
                >
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href='/contact'>
        <a className={router.asPath === '/contact' ? styles.active_link : ''}>
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
