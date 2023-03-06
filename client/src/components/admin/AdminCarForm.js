import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AdminCarForm() {
  return (
    <Form className='p-3'>
        <h5 className="text-center">Araba Kasa Tipi Ekleyin</h5>
        <Form.Group className="mb-3" controlId="textInput">
            <Form.Label>Kasa Adı :</Form.Label>
            <Form.Control type="text" placeholder="Kasa Başlık Giriniz" />
            <Form.Text className="text-muted">
                Yeni Bir Kasa Eklemek İçin Kullanınız... (E36, F10 vb)
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Kasa Adı :</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Seri Adı:</option>
            <option value="1">1 Serisi</option>
            <option value="2">2 Serisi</option>
            <option value="3">3 Serisi</option>
        </Form.Select>
        </Form.Group>
        <Container>
            <Row>
                <Col className='text-end'>
                    <Button variant="warning" type="submit" className='justify-content-center'>
                    Temizle
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" type="submit" className='justify-content-center'>
                    Kaydet
                    </Button>
                </Col>
            </Row>
        </Container>
    </Form>
  )
}

export default AdminCarForm