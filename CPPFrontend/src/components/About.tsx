
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Our advanced machine learning models analyze years of historical data to provide accurate crop price forecasts.",
      icon: <CheckCircle className="h-6 w-6 text-agri-green" />,
    },
    {
      title: "Weather Integration",
      description: "Get 6-month weather forecasts that help you understand how climate might impact crop prices and yields.",
      icon: <CheckCircle className="h-6 w-6 text-agri-green" />,
    },
    {
      title: "Market Insights",
      description: "Stay informed with real-time market trends, supply-demand analysis, and seasonal patterns.",
      icon: <CheckCircle className="h-6 w-6 text-agri-green" />,
    },
    {
      title: "Data Visualization",
      description: "Easy-to-understand charts and graphs that visualize complex data for better decision making.",
      icon: <CheckCircle className="h-6 w-6 text-agri-green" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-agri-green">AgriPredict</span>
          </h2>
          <div className="w-20 h-1 bg-agri-green mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with agricultural expertise to help farmers and traders make data-driven decisions.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Left Side - Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering Agricultural Decisions
            </h3>
            <p className="text-gray-600 mb-6">
              AgriPredict was founded with a mission to bridge the gap between agricultural data and practical decision-making. Our team of data scientists, agricultural experts, and software engineers work together to provide accurate crop price predictions that help farmers maximize their profits.
            </p>
            <p className="text-gray-600 mb-8">
              By leveraging historical data, current market trends, and advanced machine learning algorithms, we offer insights that were previously accessible only to large agribusinesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              asChild
              className="bg-agri-green hover:bg-agri-green-dark text-white"
            >
              <Link to="/about-us">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            
            <img 
              src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Farmer using tablet for digital agriculture" 
              className="w-full h-auto rounded-lg shadow-lg mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

