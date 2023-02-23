import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import HeaderAdmin from '../components/HeaderAdmin'
import CategoryForm from '../components/CategoryForm'
import SeriesForm from '../components/SeriesForm'
import CarForm from '../components/CarForm'
import DataTables from '../components/DataTables'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Categories() {
  return (
    <div>
        <HeaderAdmin />
        <NavbarAdmin />
        <Container className='mt-3 p-1'>
            <Row className='bg-white'>
                <Col lg={4} className='border border-1 border-dark'>
                    <SeriesForm />
                </Col>
                <Col lg={4} className='border border-1 border-dark'>
                    <CarForm />
                </Col>
                <Col lg={4} className='border border-1 border-dark'> 
                    <CategoryForm/>
                </Col>
            </Row>
            <DataTables className='mt-3'/>
        </Container>
    </div>
  )
}

export default Categories