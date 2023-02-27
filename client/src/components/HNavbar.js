import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaWhatsapp } from 'react-icons/fa'; 


function HNavbar() {
  return (
    <Navbar expand="xl" className='p-3 text-center justify-content-center ' id='navbar'>
      <Container>
        <Navbar.Brand href="#home">
          <img src="/img/logo/HES-OTOMOTİV-LOGO.png" alt="Logo" className='logo'/>
          <span className='baslik1'><strong>HES OTOMOTİV </strong> </span> {' '}
          <span className='baslik2'><strong>BMW MINI YEDEK PARÇALARI</strong></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-link'>Anasayfa</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Hakkımızda</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>İletişim</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Ürünlerimiz</Nav.Link>
            <Nav.Link href="#link" className='nav-link whatsapp'>Whatsapp <FaWhatsapp size={24} /> </Nav.Link>
          </Nav>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ürün Arayın"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HNavbar;