import Logo from 'components/Logo/Logo'
import { FunctionComponent } from 'react'
import styles from './Navbar.module.css'

type Props = {
  logo: string
  height?: string
  title?: string
}

const Navbar: FunctionComponent<Props> = ({ logo, height, title }) => {
  const heightInNumber = height ? parseInt(height) : 49

  return (
    <nav className={styles.navbar}>
      <Logo
        src={logo}
        height={heightInNumber}
        width={heightInNumber}
        text={title}
      ></Logo>
    </nav>
  )
}

export default Navbar
