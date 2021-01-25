import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Product from './components/Product/Product';
import Gallery from './components/Gallery/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <SimpleReactLightbox>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Product />
        <Gallery />
        <Contact />
        <Footer />
      </SimpleReactLightbox>
    </>
  );
}

export default App;
