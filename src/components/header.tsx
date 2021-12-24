import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/header.css'
import Facebook from "../icons/icon-fb.svg"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="header" >
    <div className="content-header">
      <div className="logo" >
        <StaticImage
          src="../images/logo.png"
          width={43}
          formats={["auto", "webp", "avif"]}
          alt="Logo White"
          style={{ marginRight: '0.5rem' }}
        />
        <h3 style={{ margin: 0 }}>
          <Link
            className="link-logo  "
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
      <div>
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
      <div>
        <span className="call"> 
          Llamanos:  
          <a href="tel:+573167182115">
             +57 316 718 2115
          </a>
          
        </span>
      </div>
      <div className="br5 " >
        <img src={ Facebook } alt='facebook' width={16}/>
      </div>
    </div>
  </header>
)

export default Header
