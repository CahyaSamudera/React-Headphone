const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <h1 className='logo'>M-E</h1>
          <ul className='nav'>
            <li>
              <a href='#product'>Produk</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#contact'>Kontak</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
