import React from 'react'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch,useSelector} from 'react-redux';
import {createCar} from '../../actions/car.js'
import { getSeries} from '../../actions/seri';
import {getCars} from '../../actions/car.js'



function AdminCarForm() {
    const [postData, setPostData] = useState({
        carName: '',
        series_id: '',
      });
      const [selectedSeries, setSelectedSeries] = useState('');
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getSeries());
      }, [dispatch]);
    
      const series = useSelector((state) => {
        return state.series;
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
      
        dispatch(createCar(postData));
        setPostData({ carName: "", series_id: "" });
        dispatch(getCars());
      };
    
      const handleSeriesChange = (e) => {
        setSelectedSeries(e.target.value);
        setPostData({ ...postData, series_id: e.target.value });
      };
    
      
    return (
      <Form className='p-3' onSubmit={handleSubmit}>
        <h5 className='text-center'>Araba Kasa Tipi Ekleyin</h5>
        <Form.Group className='mb-3' controlId='textInput'>
          <Form.Label>Kasa Adı :</Form.Label>
          <Form.Control
            type='text'
            placeholder='Kasa Başlık Giriniz'
            value={postData.carName}
            onChange={(e) =>
              setPostData({ ...postData, carName: e.target.value })
            }
          />
          <Form.Text className='text-muted'>
            Yeni Bir Kasa Eklemek İçin Kullanınız... (E36, F10 vb)
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='selectInput'>
          <Form.Label>Seri Adı :</Form.Label>
          <Form.Select
            aria-label='Default select example'
            value={selectedSeries}
            onChange={handleSeriesChange}
          >
            <option value=''>Seri Adı</option>
            {series.length===0 ? (
            <option value=''>Seri Adı</option>
            ) : (
            series.map((item)=>(
                <option key={item._id} value={item._id}>{item.seriesName}</option>
            ))
            )}
          </Form.Select>
        </Form.Group>
        <Container>
          <Row>
            <Col className='text-end'>
              <Button variant='warning' type='submit' className='justify-content-center'>
                Temizle
              </Button>
            </Col>
            <Col>
              <Button variant='primary' type='submit' className='justify-content-center'>
                Kaydet
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
  
  export default AdminCarForm;
  