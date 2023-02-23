import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProductForm() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <Form className='p-3'>
    <h5 className="text-center">Yeni Ürün Ekle</h5>
    <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Ürün Başlık :</Form.Label>
        <Form.Control type="text" placeholder="Ürün Başlık Giriniz" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Oem Numarası:</Form.Label>
        <Form.Control type="text" placeholder="OEM Numarası Giriniz" />
    </Form.Group>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="textInput">
                <Form.Label>Parça Kategori:</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Seçiniz:</option>
                    <option value="1">Amortisor </option>
                    <option value="2">Fren</option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col>
                <Form.Group className="mb-3" controlId="textInput">
                    <Form.Label>Durum :</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seçiniz:</option>
                        <option value="1">Sıfır</option>
                        <option value="2">Çıkma</option>
                    </Form.Select>
                </Form.Group>
        </Col>
        <Col>
                <Form.Group className="mb-3" controlId="textInput">
                    <Form.Label>Ürün Marka:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seçiniz:</option>
                        <option value="1">Wender Parts</option>
                        <option value="2">Mahle</option>
                        <option value="3">BMW</option>
                    </Form.Select>
                </Form.Group>
        </Col>
    </Row>
    SERİLER
    ARABALAR

    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="textInput">
                <Form.Label>Stok:</Form.Label>
                <Form.Control type="text" placeholder="Stok Giriniz" />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId="textInput">
                <Form.Label>Maliyet:</Form.Label>
                <Form.Control type="text" placeholder="Maliyet Fiyatı Giriniz" />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId="textInput">
                <Form.Label>Net Satış Fiyatı:</Form.Label>
                <Form.Control type="text" placeholder="Satış Fiyatı Giriniz" />
            </Form.Group>
        </Col>
    </Row>
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

export default ProductForm