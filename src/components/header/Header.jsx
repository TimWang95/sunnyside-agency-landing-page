import logo from 'src/assets/icons/logo.svg'
// import { ReactComponent as Logo } from "src/assets/icons/logo.svg"
import { ReactComponent as Hamberger } from "src/assets/icons/icon-hamburger.svg" 
import useWidthSize from "src/hooks/useWidthSize"
import useActive from "src/hooks/useActive"

function NavbarMenu() {
  return (
    <>
      <nav className="navbar-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" className="nav-link" data-reveal>About</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#services" className="nav-link" data-reveal>Services</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#projects" className="nav-link" data-reveal>Projects</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#contact" className="nav-link" data-reveal>CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

function Header() {
  const { width } = useWidthSize()
  const { active, handleToggle } = useActive()

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {width < 1024 ? (
          <div className={active ? "navigate-mobile" : "navigate-mobile bg-none"}>
            {/* Navbar-toggle */}
            <button className="burgar-container cursor-pointer" onClick={handleToggle}>
              <Hamberger/>
            </button>
            
            {/* menu */}
            {active ? (
              <>
                <NavbarMenu/>
              </>
            ):(
              null
            )}
          </div>
        ):(
          <div className="navigate-desktop">
            <NavbarMenu/>
          </div>
        )}
      </header>
    </>
  )
}

export default Header