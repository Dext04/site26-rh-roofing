import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Areas from './components/Areas';
import Gallery from './components/Gallery';
import EmergencyCTA from './components/EmergencyCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Reviews />
      <Gallery />
      <Areas />
      <EmergencyCTA />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
