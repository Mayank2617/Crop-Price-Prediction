
import Navbar from '@/components/Navbar';
import Weather from '@/components/Weather';
import Footer from '@/components/Footer';

const WeatherPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Weather />
      </main>
      <Footer />
    </div>
  );
};

export default WeatherPage;
