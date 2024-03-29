import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaWhatsapp } from 'react-icons/fa'; 


function HNavbar() {
  const myComponentStyles = {
    display: "block",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10",
    backgroundColor: "#fff",
    boxShadow: "0 4px 4px -2px rgba(0,0,0,0.2), 0 2px 8px 0 rgba(0,0,0,0.14), 0 6px 10px 0 rgba(0,0,0,0.12)",
    marginTop: "75px",
    transition: "margin-top 0.4s ease-in-out"
  };
  const [myStyles, setMyStyles] = useState(myComponentStyles);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1200px)').matches) {
      function handleScroll() {
        const newStyles = {
          ...myComponentStyles,
          marginTop: window.scrollY > 30 ? '0px' : '75px',
        };
        setMyStyles(newStyles);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // if the screen size is smaller than xl, set marginTop to 0
      setMyStyles({ ...myComponentStyles, marginTop: '0' });
    }

  }, []);
  return (
    <div>
      <Navbar style={myStyles} expand="xl"className='p-3 text-center justify-content-center header navbar ' id='navbar'>
      <Container className='nav'>
        <Navbar.Brand href="#home">
          <img src="/img/logo/HES-OTOMOTIV-LOGO.png" alt="Logo" className='logo'/>
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
            <Nav.Link href="#link" className='nav-link whatsapp'>Whatsapp <FaWhatsapp size={24} className='icon' /> </Nav.Link>
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
    </div>

  );
}

export default HNavbar;