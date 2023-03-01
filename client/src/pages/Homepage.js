import React from 'react'
import HCarMenu from '../components/HCarMenu'
import HNavbar from '../components/HNavbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HBgImg from '../components/HBgImg'
import HSearchBar from '../components/HSearchBar'
import HSlider from '../components/HSlider'
import HFooter from '../components/HFooter'
import HHeader from '../components/HHeader'
import HProducts from '../components/HProducts'
import HWhaptsappButton from '../components/HWhatsappButton'

function Homepage() {
  return (
    <div>
        <HHeader/>
        <HNavbar />
        <div className='mt-5 pt-5'>
          <Row>
            <Col className='ms-3'>
              <HCarMenu/>
            </Col>
            <Col>
              <HBgImg />
            </Col>
          </Row>
          <HSearchBar />
          <HWhaptsappButton />
          <HProducts className='justify-content-center' />
          <div className='d-block'>
            <HSlider/>            
          </div>
        </div>
        <HFooter/>
    </div>
  )
}

export default Homepage