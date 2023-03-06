import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FaWhatsapp,FaFacebookF,FaInstagram } from 'react-icons/fa'
import { SiSahibinden } from 'react-icons/si'

function HFooter() {
  return (
    <div >
        <Container fluid className='text-center bg-footer p-5 text-white footer mt-5'>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={4}>
                            <img src="/img/logo/HES-OTOMOTİV-LOGO1-1.svg" alt="Logo" className='logoFooter'/>
                        </Col>
                        <Col md={8}>
                            <h4 className='baslik1'><strong>HES OTOMOTİV</strong></h4>
                            <h5 className='baslik2'><strong>BMW MINI COOPER YEDEK PARÇALARI</strong> </h5>
                            <div className='text-primary'>
                                <FaWhatsapp size={32}   className='icon whatsapp'/> {'   '}
                                <FaFacebookF size={32}  className='icon facebook'/> {'   '}
                                <FaInstagram size={32}  className='icon instagram'/> {'   '}
                                <SiSahibinden size={32}  className='icon sahibinden'/>
                            </div>

                        </Col>
                    </Row>
                </Col>
                <Col className='text-center' md={2}>
                    <h4>Kurumsal</h4>
                    <ul>
                        <li>
                            Hakkımızda
                        </li>
                        <li>
                            İletişim
                        </li>
                        <li>
                            Vizyon
                        </li>
                    </ul>
                </Col >
                <Col className='text-center' md={2}>
                    <h4>TESLİMAT & İADE</h4>
                    <ul>
                        <li>
                            Teslimat Bilgileri
                        </li>
                        <li>
                            İade & Değişim
                        </li>
                        <li>
                            Mesafeli Satış Sözleşmesi
                        </li>
                    </ul>
                </Col>
                <Col className='text-center' md={2}>
                    <h4>Admin</h4>
                    <ul>
                        <li>
                            Admin Girişi
                        </li>
                    </ul>
                </Col>
            </Row>
            <hr />
            Designed By |<span className='Designed-By'> Erdem Hacıhasanoğlu</span> 
        </Container>
    </div>
  )
}

export default HFooter