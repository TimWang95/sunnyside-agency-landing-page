import logo from 'src/assets/icons/logo.svg'
import { ReactComponent as Facebook } from "src/assets/icons/icon-facebook.svg"
import { ReactComponent as Instagram } from "src/assets/icons/icon-instagram.svg"
import { ReactComponent as Twitter } from "src/assets/icons/icon-twitter.svg"
import { ReactComponent as Pinterest } from "src/assets/icons/icon-pinterest.svg"
import useActive from 'src/hooks/useActive'

function Footer() {
  const { active, handleToggle } = useActive()
  return (
    <>
      <footer className="footer">
        <div className="logo__container">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="footer__menu">
          <a href="#about" className="footer__link">About</a>
          <a href="#services" className="footer__link">Services</a>
          <a href="#projects" className="footer__link">Projects</a>
        </div>
        <div className="footer__social">
          <a href="#home" className="social__link"><Facebook/></a>
          <a href="#home" className="social__link"><Instagram/></a>
          <a href="#home" className="social__link"><Twitter/></a>
          <a href="#home" className="social__link"><Pinterest/></a>
        </div>
        <div className="attribution">
          {active ? (
            <div className="attribution__context">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
              Coded by <a href="https://github.com/TimWang95">Tim Wang</a>.
            </div>
          ):(null)}
          <button type="button" className="btn" onClick={handleToggle}>
            <img src="https://avatars.githubusercontent.com/u/113501106?v=4" alt="btn"/>
          </button>
        </div>
        
      </footer>
    </>
  )
}


export default Footer