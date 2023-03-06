import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminCategoryForm from '../../components/admin/AdminCategoryForm'
import AdminSeriesForm from '../../components/admin/AdminSeriesForm'
import AdminCarForm from '../../components/admin/AdminCarForm'
import AdminDataTables from '../../components/admin/AdminDataTables'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Categories() {
  return (
    <div>
        <AdminNavbar />
        <Container className='mt-3 p-1'>
            <Row className='bg-white'>
                <Col lg={4} className='border border-1 border-dark'>
                    <AdminSeriesForm />
                </Col>
                <Col lg={4} className='border border-1 border-dark'>
                    <AdminCarForm />
                </Col>
                <Col lg={4} className='border border-1 border-dark'> 
                    <AdminCategoryForm/>
                </Col>
            </Row>
            <AdminDataTables className='mt-3'/>
        </Container>
    </div>
  )
}

export default Categories