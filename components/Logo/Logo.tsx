import { FunctionComponent } from 'react'
import styles from './Logo.module.css'
type Props = {
  src: string
  alt?: string
  width?: string
  height?: string
  text?: string
}
const Logo: FunctionComponent<Props> = ({
  src,
  alt = 'Logo',
  width,
  height,
  text,
}) => {
  const imgStyles = {
    width: width || 'auto',
    height: height || 'auto',
  }
  return (
    <div className={styles.logo}>
      <img src={src} alt={alt} style={imgStyles} />
      {text && <h1 className={styles.h1}>{text}</h1>}
    </div>
  )
}

export default Logo
