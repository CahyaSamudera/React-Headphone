import Showcase from '../../Images/showcase.jpg';

const Hero = () => {
  return (
    <>
      <section className='section-a' id='hero'>
        <div className='container'>
          <div>
            <h1>Headphone Masa Kini</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              at ea, ipsa magni facilis cupiditate quibusdam harum dolores quo
              quae.
            </p>
            <a href='#contact' className='btn'>
              Pesan
            </a>
          </div>
          <img src={Showcase} alt='' />
        </div>
      </section>
    </>
  );
};

export default Hero;
