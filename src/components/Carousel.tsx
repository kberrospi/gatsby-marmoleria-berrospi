import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carousel.css'

export const Carousel1 = () => {


  return (
    <div className='content-carousel'> 
      <Carousel>
        <Carousel.Item>
          <StaticImage
            imgClassName ='img-slider'
            className='content-img-slider'
            src="../images/carousel/slider1.png"
            alt="A dinosaur"
            placeholder="blurred"
          />
          <Carousel.Caption>
            <p>Haz tu sueño realidad con </p>
            <h1>Marmoleria Berrospi</h1>
            {/* <div className='link-slider'>
              <a  href='#'> Ver Productos </a>
            </div> */}
            <a className='link-slider' href='#'> Ver Productos </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            imgClassName ='img-slider'
            className='content-img-slider'
            src="../images/carousel/slider2.png"
            alt="A dinosaur"
            placeholder="blurred"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

       {/*  <Carousel.Item>
          <StaticImage
            imgClassName ='img-slider'
            className='content-img-slider'
            src="../images/slider1.png"
            alt="A dinosaur"
            placeholder="blurred"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}
