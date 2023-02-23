import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function HeaderAdmin() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-3'>
      <Container>
        <Navbar.Brand >HES OTOMOTİV YÖNETİCİ PANELİ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link href="#features">Anasayfa</Nav.Link>
                <NavDropdown title="Ürün İşlemleri" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ürünlerim</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Ürün Ekle</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Kategori İşlemleri" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Kategoriler</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Kategori Ekle</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Arabalar / Seriler</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Araba Ekle</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Ticari İşlemler" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ödemelerim</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Alacaklarım</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Satışlarım</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Gelen Ürün Faturaları</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Personel İşlemleri" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Personeller</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Personel Ekle</NavDropdown.Item>
                </NavDropdown>  
          </Nav>
          <Button variant="dark">Çıkış Yap</Button>             
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderAdmin