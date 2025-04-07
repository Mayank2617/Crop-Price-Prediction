
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, TrendingUp } from 'lucide-react';

const CropAdvisoryHero = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-white via-agri-wheat-light/10 to-agri-brown-light/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          
          {/* Right Side - Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
            <div className="relative h-64 sm:h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop&crop=entropy"
                alt="Crop field with colorful flowers" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-agri-brown flex items-center justify-center text-white">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-xs">Profit Increase</p>
                    <p className="font-bold text-agri-brown-dark">Up to 35%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 lg:pr-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-agri-brown">Crop</span> Advisory <br />
              For <span className="text-agri-green">Maximum</span> Profits
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Get personalized crop recommendations based on your location, season, and market trends to maximize your agricultural profits.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-brown flex items-center justify-center text-white">
                    <span className="text-xs">1</span>
                  </div>
                </div>
                <p className="text-gray-700">Smart crop selection based on profitability analysis</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-brown flex items-center justify-center text-white">
                    <span className="text-xs">2</span>
                  </div>
                </div>
                <p className="text-gray-700">Complete harvest timeline and price projections</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="h-6 w-6 rounded-full bg-agri-brown flex items-center justify-center text-white">
                    <span className="text-xs">3</span>
                  </div>
                </div>
                <p className="text-gray-700">Region-specific recommendations for your state</p>
              </div>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-agri-brown hover:bg-agri-brown-dark text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              <Link to="/crop-advisory">
                Get Crop Recommendations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisoryHero;
