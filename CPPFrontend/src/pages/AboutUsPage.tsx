
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-agri-green-light/5 to-agri-wheat-light/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-agri-green">AgriPredict</span>
              </h1>
              <div className="w-20 h-1 bg-agri-green mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering farmers with data-driven insights for better agricultural decisions
              </p>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  AgriPredict was born out of a vision to democratize access to agricultural intelligence. We believe that every farmer, regardless of the size of their operation, deserves access to accurate data and predictive analytics to maximize their yield and profitability.
                </p>
                <p className="text-gray-700 mb-4">
                  Our platform combines cutting-edge machine learning algorithms with comprehensive historical crop price data to provide farmers with reliable price predictions. By analyzing patterns, seasonal trends, and market dynamics, we help farmers make informed decisions about when to plant, harvest, and sell their crops.
                </p>
                <p className="text-gray-700 mb-6">
                  Additionally, our integrated weather forecasting system offers farmers valuable insights into upcoming climate conditions, allowing them to better prepare for and adapt to changing weather patterns.
                </p>

                <div className="space-y-3 mb-8">
                  {["Founded in 2025", "Trained on 85,000+ entries from 6 years of data", "83% prediction accuracy", "Covering 200+ crops across 30 Indian state"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-agri-green mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1647510173529-d91eb50bab8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmUlMjBwcmVkaWN0aW9ufGVufDB8fDB8fHww"
                  alt="Farmer using tablet for digital agriculture"
                  className="w-full h-auto rounded-lg shadow-lg mt-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <div className="w-16 h-1 bg-agri-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The brilliant minds behind AgriPredict's innovative agricultural solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/Mayank.png"
                    alt="Mayank Sahu"
                    className="w-32 h-32 rounded-full object-cover object-[center_5%] mx-auto mb-4 border-4 border-agri-green-light"
                  />

                  <h3 className="text-xl font-bold text-gray-900 mb-1">Mayank Sahu</h3>
                  <p className="text-agri-green mb-3">Lead Developer & AI Specialist</p>
                  <p className="text-gray-600 mb-4">
                    "I believe technology can revolutionize agriculture in India. Our goal is to make advanced predictive tools accessible to every farmer across the country."
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Mayank2617"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-agri-green-dark hover:text-agri-green transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mayank--sahu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-agri-green-dark hover:text-agri-green transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                    alt="Manas Mishra"
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-agri-green-light"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Manas Mishra</h3>
                  <p className="text-agri-green mb-3">Data Scientist & Agricultural Expert</p>
                  <p className="text-gray-600 mb-4">
                    "Combining agricultural science with data analytics allows us to create tools that have real-world impact on farmers' livelihoods and agricultural sustainability."
                  </p>
                  <div className="flex space-x-3">
                    {['GitHub', 'LinkedIn'].map((platform, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sm text-agri-green-dark hover:text-agri-green transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                className="bg-agri-green hover:bg-agri-green-dark text-white"
              >
                <Link to="/predict">
                  Try Our Crop Price Prediction <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
