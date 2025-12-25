
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WeatherHero = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-white via-blue-50 to-agri-blue-light/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Side - Weather Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
            <div className="relative h-64 sm:h-80 md:h-96">
              {/* Weather Image */}
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=entropy"
                alt="Weather landscape with sun rays" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              
              {/* Optional overlay card for weather stats */}
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-agri-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-xs">Weather Accuracy</p>
                    <p className="font-bold text-agri-blue-dark">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="lg:w-1/2 lg:pl-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-agri-blue-dark">Weather</span> Forecasts <br />
              For Smarter <span className="text-agri-blue">Farming</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Plan your agricultural activities with precision using our six-month weather forecasts, specifically designed for farmers and agricultural professionals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-blue flex items-center justify-center text-white">
                    <span className="text-xs">1</span>
                  </div>
                </div>
                <p className="text-gray-700">Accurate rainfall and temperature predictions</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-blue flex items-center justify-center text-white">
                    <span className="text-xs">2</span>
                  </div>
                </div>
                <p className="text-gray-700">Seasonal forecasting to optimize planting and harvesting</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-blue flex items-center justify-center text-white">
                    <span className="text-xs">3</span>
                  </div>
                </div>
                <p className="text-gray-700">Climate pattern analysis to prepare for extreme conditions</p>
              </div>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-agri-blue hover:bg-agri-blue-dark text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              <Link to="/weather">
                Check Weather Forecast <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHero;
