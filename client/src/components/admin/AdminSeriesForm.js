import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch} from 'react-redux';
import {createSeri} from '../../actions/seri.js'


function AdminSeriesForm() {

  const [postData,setPostData]=useState({
    seriesName:''
  });

  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(createSeri(postData));
  }

  return (
    <Form className='p-3' onSubmit={handleSubmit}>
        <h5 className="text-center">Araba Marka/Seri Ekleyin</h5>
    <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Seri Adı :</Form.Label>
        <Form.Control type="text" placeholder="Seri Adı Giriniz" value={postData.seriesName} onChange={(e)=>setPostData({...postData,seriesName:e.target.value})} />
        <Form.Text className="text-muted">
        Yeni Bir Seri Eklemek İstiyorsanız Kullanınız... (1 Serisi, X serisi vb)
        </Form.Text>
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

export default AdminSeriesForm