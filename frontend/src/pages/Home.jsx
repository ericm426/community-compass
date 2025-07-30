import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ResourcesPreview from '../components/ResourcesPreview';

/*import Stats from '../components/Stats';
import CTASection from '../components/CTASection';*/


const Home = () => {
  return (
    <div className="page">
      <Header/>
      <Hero/>
      <Features/>
      <ResourcesPreview/>
      <Footer/>
    </div>
  )
}

export default Home;