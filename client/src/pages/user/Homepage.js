import React from 'react'
import HCarMenu from '../../components/user/HCarMenu'
import HNavbar from '../../components/user/HNavbar'
import HBgImg from '../../components/user/HBgImg'
import HSearchBar from '../../components/user/HSearchBar'
import HSlider from '../../components/user/HSlider'
import HFooter from '../../components/user/HFooter'
import HHeader from '../../components/user/HHeader'
import HProducts from '../../components/user/HProducts'
import HWhaptsappButton from '../../components/user/HWhatsappButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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