const Header = () => <header>HEADER</header>

const Main = () => <main></main>

const Footer = () => <footer>FOOTER</footer>

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Main>{children}</Main>
      <Footer/>
    </div>
  )
}

export default Layout
