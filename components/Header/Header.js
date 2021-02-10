import Nav from './../Nav/Nav'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  )
}

export default Header
