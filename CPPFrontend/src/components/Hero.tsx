
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center bg-gradient-to-br from-white via-agri-wheat-light/20 to-agri-green-light/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="text-agri-green">Predict</span> Crop Prices <br />
              <span className="text-agri-brown">Harvest</span> Better Returns
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Make data-driven decisions with our advanced AI-powered crop price prediction system. Stay ahead of market trends and maximize your profits.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-agri-green hover:bg-agri-green-dark text-white font-medium px-8 py-3 rounded-md transition-colors"
              >
                <Link to="/predict">
                  Predict Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-agri-brown text-agri-brown hover:bg-agri-brown-light/10"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Side - Animation/Image */}
          <div className="lg:w-1/2 relative animate-fade-in-delay opacity-0">
            <div className="relative mx-auto">
              {/* Main Image - Made wider */}
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=entropy"
                alt="Wheat field at sunset" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              {/* Floating Card 1 - Updated content and placed at corner */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-agri-blue-light flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-xs">Crop Varieties</p>
                    <p className="font-bold text-agri-blue-dark">200+</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Card 2 - Updated content and placed at corner */}
              <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-agri-green flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-xs">States Coverage</p>
                    <p className="font-bold text-agri-green-dark">30 States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
