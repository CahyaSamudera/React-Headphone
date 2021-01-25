import Image from '../../Images/earphone2.jpg';
import Image2 from '../../Images/headphone-3.png';
import Image3 from '../../Images/headphone-4.png';
import './Product.css';

const Product = () => {
  return (
    <div className='product-container' id='product'>
      <h1 className='section-title'>Produk Terlaris</h1>
      <div className='container-3'>
        <div className='container-5'>
          <div className='card'>
            <img src={Image} alt='' className='card_img' />

            <div className='card_data'>
              <h1 className='card_title'>Astra-1</h1>
              <span className='card_preci'>120k</span>
              <p className='card_description'>
                Earphone Terbaru Terbaik Terpopuler
              </p>
              <a href='#hero' className='card_button'>
                Order
              </a>
            </div>
          </div>
        </div>
        <div className='container-5'>
          <div className='card'>
            <img src={Image2} alt='' className='card_img' />

            <div className='card_data'>
              <h1 className='card_title'>Bardia-A</h1>
              <span className='card_preci'>150k</span>
              <p className='card_description'>
                Earphone Terbaru Terbaik Terpopuler
              </p>
              <a href='#hero' className='card_button'>
                Order
              </a>
            </div>
          </div>
        </div>
        <div className='container-5'>
          <div className='card'>
            <img src={Image3} alt='' className='card_img' />

            <div className='card_data'>
              <h1 className='card_title'>Indra-1</h1>
              <span className='card_preci'>170k</span>
              <p className='card_description'>
                Earphone Terbaru Terbaik Terpopuler
              </p>
              <a href='#hero' className='card_button'>
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
