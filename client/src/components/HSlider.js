import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import HProductCard from "./HProductCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
        ],
      };
    return (
    
      <div>
        <h1 className='text-center mb-3'><strong>MARKALARIMIZ</strong></h1>
        <Container fluid className=" p-5 d-block text-center justify-content-center">
        <Slider {...settings}>
          <div className='sliderrr m-1'>
          <img src="/img/brands/bmw.png" alt="Logo" />
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/mini.png" alt="Logo"/>
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/Behr-Hella-Logo.png" alt="Logo"/>
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/wender.png" alt="Logo"/>
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/ina.png" alt="Logo"/>
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/luk.png" alt="Logo"/>
          </div>
          <div  className='sliderrr m-1'>
          <img src="/img/brands/valeo.png" alt="Logo"/>
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/hella.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/bosch.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/textar.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/nissens.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/manfilter.jpeg" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/lemforder.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/boge.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/glyco.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/mahle.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/gates.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/goetze.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/delphi.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/cortego.png" alt="Logo" />
          </div>
          <div className='sliderrr m-1'>
          <img src="/img/brands/swf.png" alt="Logo" />
          </div>
        </Slider>
        </Container>
      </div>
    );
  }
}