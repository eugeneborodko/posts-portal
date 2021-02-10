import Head from 'next/head'

import Header from './Header/Header'

const Layout = ({ children, title = 'Posts Portal' }) => {
  return (
    <>
      <Head>
        <title>{title} | Posts Portal</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
