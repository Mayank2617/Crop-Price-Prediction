
import Navbar from '@/components/Navbar';
import PredictCropPrice from '@/components/PredictCropPrice';
import Footer from '@/components/Footer';

const PredictPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PredictCropPrice />
      </main>
      <Footer />
    </div>
  );
};

export default PredictPage;
