import Link from 'next/link'
import styles from './nav.module.scss'

const Nav = () => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link href="/"><a className={styles.link}>Home</a></Link>
        <Link href="/posts"><a className={styles.link}>Posts</a></Link>
        <Link href="/about"><a className={styles.link}>About</a></Link>
      </nav>
    </div>
  )
}

export default Nav