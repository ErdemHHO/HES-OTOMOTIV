import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FaPhoneAlt, FaMailBulk ,FaMapMarkedAlt} from 'react-icons/fa'; 
import { GrMapLocation } from 'react-icons/gr'; 

function HHeader() {
  return (
    <div className='header p-1 text-white d-none d-xl-flex'>
        <Container>
            <Row>
                <Col sm={3}>
                    <img src="/img/brands/bmw.png" alt="Logo" className='logo2'/>
                    <img src="/img/brands/mini.png" alt="Logo" className='logo2'/>
                </Col>
                <Col className='text-'>
                    <Row>
                        <Col>
                            <Row>
                                <Col sm={3}>
                                    <FaPhoneAlt size={55}  /> 
                                </Col>
                                <Col>
                                    <span><strong>+ 90 532 240 90 58</strong> </span> <br /> <span><strong>0 (216) 630 16 16</strong> </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col sm={3}>
                                    <FaMapMarkedAlt size={55} /> 
                                </Col>
                                <Col className='p-2'>
                                    <span> Gümrükçüler Sanayi Sitesi A Blok No:26 Ümraniye / İstanbul</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <FaMailBulk size={55} />   <span>info@hesotomotiv.com</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>


    </div>
  )
}

export default HHeader