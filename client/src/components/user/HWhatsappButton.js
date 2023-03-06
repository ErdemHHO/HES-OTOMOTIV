import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; 

function HWhatsappButton() {
  return (
    <div>
        <div className='d-none d-md-flex whatsappButton p-2 text-center'>
        <Container>
        <FaWhatsapp size={60} />
            WhatSapp {'   '}
             <strong>0532 240 90 58</strong>
        </Container>
        </div>
        <div className='d-flex d-md-none whatsappButton2 p-2 text-center'>
            <FaWhatsapp size={60} />
        </div>
    </div>

  )
}

export default HWhatsappButton