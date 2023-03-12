import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminCategoryForm from '../../components/admin/AdminCategoryForm'
import AdminSeriesForm from '../../components/admin/AdminSeriesForm'
import AdminCarForm from '../../components/admin/AdminCarForm'
import AdminCategoriesTables from '../../components/admin/AdminCategoriesTables'
import AdminCarTable from '../../components/admin/AdminCarTable'
import AdminCategoryTable1 from '../../components/admin/AdminCategoryTable1'
import AdminSeriesTable from '../../components/admin/AdminSeriesTable'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



function Categories() {


  return (
    <div className='bg-light'>
        <AdminNavbar />
        <Container className='mt-3 p-1'>
            <Row className='bg-white border border-1'>
                <Col lg={4}>
                    <AdminSeriesForm />
                </Col>
                <Col lg={4}>
                    <AdminCarForm />
                </Col>
                <Col lg={4}> 
                    <AdminCategoryForm/>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col lg={4}>
                    <AdminSeriesTable/>
                </Col>
                <Col lg={4}>
                    <AdminCarTable/>
                </Col>
                <Col lg={4}>
                    <AdminCategoryTable1/>
                </Col>
            </Row>
            <AdminCategoriesTables/>
        </Container>
    </div>
  )
}

export default Categories