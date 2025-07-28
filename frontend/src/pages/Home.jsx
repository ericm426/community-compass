import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
/*import ResourcesPreview from '../components/ResourcesPreview';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';*/
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default Home;