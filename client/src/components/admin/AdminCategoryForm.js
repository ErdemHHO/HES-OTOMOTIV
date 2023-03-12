import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch} from 'react-redux';
import {createCategory} from '../../actions/category.js'

function AdminCategoryForm() {

  const [postData,setPostData]=useState({
    categoryName:''
  });

  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(createCategory(postData));
  }


  return (
    <Form className='p-3' onSubmit={handleSubmit}>
      <h5 className="text-center">Kategori Ekleyin</h5>
      <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Kategori Adı :</Form.Label>
        <Form.Control type="text" placeholder="Kategori Adı Giriniz" value={postData.categoryName} onChange={(e)=>setPostData({...postData,categoryName:e.target.value})} />
        <Form.Text className="text-muted">
          Yeni Bir Kategori Eklemek İstiyorsanız Kullanınız... (Fren,Elektrik vb)
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

export default AdminCategoryForm