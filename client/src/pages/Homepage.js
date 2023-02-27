import React from 'react'
import HCarMenu from '../components/HCarMenu'
import HNavbar from '../components/HNavbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HBgImg from '../components/HBgImg'

function Homepage() {
  return (
    <div>
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
        </div>
    </div>
  )
}

export default Homepage