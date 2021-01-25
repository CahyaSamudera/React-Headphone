const Footer = () => {
  return (
    <>
      <footer className='section-footer'>
        <div className='container'>
          <div>
            <h2>Magic Headphone</h2>
            <a href='http://twitter.com'>
              <i className='fab fa-twitter fa-2x'></i>
            </a>
            <a href='http://facebook.com'>
              <i className='fab fa-facebook fa-2x'></i>
            </a>
            <a href='http://instagram.com'>
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>
          <div>
            <h3>Company Info</h3>
            <ul>
              <li>
                <a href='#hero'>All Products</a>
              </li>
              <li>
                <a href='#hero'>About Us</a>
              </li>
              <li>
                <a href='#hero'>Privacy Policy</a>
              </li>
              <li>
                <a href='#hero'>Terms of Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Blog Post</h3>
            <ul>
              <li>
                <a href='#hero'>Lorem, ipsum.</a>
              </li>
              <li>
                <a href='#hero'>Lorem, ipsum.</a>
              </li>
              <li>
                <a href='#hero'>Lorem, ipsum.</a>
              </li>
              <li>
                <a href='#hero'>Lorem, ipsum.</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Subscribe</h3>
            <p>Untuk mendapatkan penawaran menarik dari kami.</p>
            <form name='email-form'>
              <div className='email-form'>
                <span className='form-control-wrap'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    size='40'
                    className='form-control'
                    placeholder='Email'
                  />
                </span>
                <button type='submit' className='form-control submit'>
                  <i className='fas fa-chevron-right'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
