import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'; 

function HBgImg() {
  return (
    <div>
        <Container className='d-none d-xl-flex' >
          <Row>
            <Col sm={4}>
              <img src="/img/logo/HES-OTOMOTIV-LOGO1.png" alt="" className='hesLogo1'></img>
            </Col>
            <Col className='baslik' sm={8}>
              <h5 className='text-decoration-underline'><strong>BMW MINI COOPER YEDEK PARÇALARI</strong></h5>
              <h5 className='text-primary'>
                <FaPhoneAlt className='icon'/>
                +90 0532 240 90 58
              </h5>
            </Col>
          </Row>
        </Container>
        <div className='home d-none d-xl-flex'>
            <img src="/img/logo/bmwpng.png" alt="" className='bmwCar'></img>
        </div>
        <br /><br />
        <div className='d-xl-none d-lg-flex'>
            <img src="/img/logo/bmwpng.png" alt="" className='bmwCar2'></img>
            <img src="/img/logo/HES OTOMOTİV-3.png" alt="" className='bmwCar2'></img>
        </div>
    </div>

  )
}

export default HBgImg