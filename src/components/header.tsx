import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="header" >
    <div className="content-header">
      <div className="logo" >
        <StaticImage
          src="../images/logo.png"
          width={53}
          formats={["auto", "webp", "avif"]}
          alt="Logo White"
          style={{ marginRight: '0.5rem' }}
        />
        <h5 style={{ margin: 0 }}>
          <Link
            className="link-logo  "
            to="/"
            style={{
              textDecoration: `none`,
            }}
            
          >
            <StaticImage
              src="../images/logo-texto.png"
              width={160}
              formats={["auto", "webp", "avif"]}
              alt={siteTitle}
              style={{ marginRight: '0.5rem' }}
            />
            {/* <span>Marmoleria <br/> Berrospi</span> */}
          </Link>
        </h5>
      </div>
      <div className="menu">
        <nav className="navbar">
          <ul> 
            <li >
              <a href="#" className="colorDarkAccent hover-color-accent">Inicio</a>
            </li>
            <li >
              <a href="#" className="colorDarkAccent hover-color-accent">Materiales</a>
            </li >
            <li >
              <a href="#" className="colorDarkAccent hover-color-accent">Productos</a>
            </li>
            <li>
              <a href="#" className="colorDarkAccent hover-color-accent">Nosotros</a>
            </li>
            <li>
              <a href="#" className="colorDarkAccent hover-color-accent">Contactenos</a>
            </li>
          </ul>
        </nav>
      </div>
     {/*  <div>
        <span className="call"> 
          Escribenos:  
          <a href="mailto:marmoleriaberrospi@hotmail.com">
             marmoleriaberrospi@hotmail.com
          </a>
          
        </span>
      </div> */}
      <div className="social" >
        <a href="https://facebook.com/MarmoleriaBerrospi/" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} className="icon"/>
        </a>
        <a href="https://instagram.com/marmoleriaberrospi" target="_blank" >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+573167182115&text=Hola, Nececito mas informacion!" target="_blank" >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
        <a href="mailto:marmoleriaberrospi@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon"/>
        </a>
      </div>
    </div>
  </header>
)

export default Header
