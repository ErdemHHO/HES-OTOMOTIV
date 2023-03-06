import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa'; 

function HProductCard() {
  return (
    <div class="box border border-2">
    <img src="img/brands/bmw.png" alt="car part" />
    <h3>Engine</h3>
    <span class="price">5000 TL</span>
    <div class="part-text">
      <p class="part-text">
        ÜRÜN NO: 7762 <br />
        OEM NO: 51117136632 <br />
        DURUM: SIFIR <br />
        MARKA: Wender Parts <br />
      </p>
    </div>
    <div class="buttons">
      <Button variant="outline-success"><FaWhatsapp />Whatsapp İle Sipariş </Button>{' '}
      <Button variant="outline-dark">Detay Gör</Button>
    </div>		
  </div>
  );
}

export default HProductCard;