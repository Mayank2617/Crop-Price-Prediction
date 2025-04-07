
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WeatherHero from '@/components/WeatherHero';
import CropAdvisoryHero from '@/components/CropAdvisoryHero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WeatherHero />
        <CropAdvisoryHero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
