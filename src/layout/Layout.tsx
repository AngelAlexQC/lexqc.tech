import Navbar from 'layout/Navbar/Navbar'
import { FunctionComponent } from 'react'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
const Layout: FunctionComponent = ({ children }) => {
  const logo = '/logo.png'
  const height = '49px'
  const title = 'Ángel Quiroz'
  return (
    <div className={styles.wrapper}>
      <Navbar logo={logo} height={height} title={title}></Navbar>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  )
}
export default Layout
