import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from './Logo.module.css'
type Props = {
  src: string
  alt?: string
  width: number
  height: number
  text?: string
}
const Logo: FunctionComponent<Props> = ({
  src,
  alt = 'Logo',
  width,
  height,
  text,
}) => {
  return (
    <div className={styles.logo}>
      <Image src={src} alt={alt} width={width} height={height} />
      {text && <h1 className={styles.h1}>{text}</h1>}
    </div>
  )
}

export default Logo
