import Navbar from 'layout/Navbar/Navbar'
import { FunctionComponent } from 'react'

const Layout: FunctionComponent = ({ children }) => {
  const logo = '/logo.png'
  const height = '49px'
  const title = 'Ángel Quiroz'
  return (
    <div>
      <Navbar logo={logo} height={height} title={title}></Navbar>
      <main>{children}</main>
    </div>
  )
}
export default Layout
