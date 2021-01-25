import Image1 from '../../Images/gal.jpg';
import Image2 from '../../Images/earphone.jpg';
import Image3 from '../../Images/earphone2.jpg';
import Image4 from '../../Images/earphone3.jpg';
import Image5 from '../../Images/earphone-kids.jpg';
import Image6 from '../../Images/earphone4.jpg';
import { SRLWrapper } from 'simple-react-lightbox';

const Gallery = () => {
  return (
    <>
      <SRLWrapper>
        <h1 className='gallery-title'>Gallery</h1>
        <div className='section-c' id='gallery'>
          <div className='gallery'>
            <a href={Image1} className='big'>
              <img src={Image1} alt='' />
            </a>
            <a href={Image2} className='big'>
              <img src={Image2} alt='' />
            </a>
            <a href={Image3} className='big'>
              <img src={Image3} alt='' />
            </a>
            <a href={Image4} className='big'>
              <img src={Image4} alt='' />
            </a>
            <a href={Image5} className='big'>
              <img src={Image5} alt='' />
            </a>
            <a href={Image6} className='big'>
              <img src={Image6} alt='' />
            </a>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Gallery;
