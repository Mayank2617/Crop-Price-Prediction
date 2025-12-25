
import { useState, useEffect } from 'react';
import { Cloud, Droplets, Sun, Wind, CloudRain, CloudSnow, CloudFog } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data for the 6-month weather forecast
const mockWeatherData = [
  { month: 'November', avgTemp: 15, precipitation: 45, humidity: 75, icon: <Cloud className="h-10 w-10 text-agri-blue" /> },
  { month: 'December', avgTemp: 8, precipitation: 65, humidity: 82, icon: <CloudRain className="h-10 w-10 text-agri-blue" /> },
  { month: 'January', avgTemp: 5, precipitation: 70, humidity: 84, icon: <CloudSnow className="h-10 w-10 text-agri-blue-light" /> },
  { month: 'February', avgTemp: 6, precipitation: 60, humidity: 80, icon: <CloudSnow className="h-10 w-10 text-agri-blue-light" /> },
  { month: 'March', avgTemp: 10, precipitation: 55, humidity: 78, icon: <CloudRain className="h-10 w-10 text-agri-blue" /> },
  { month: 'April', avgTemp: 14, precipitation: 40, humidity: 70, icon: <Sun className="h-10 w-10 text-agri-wheat" /> },
];

const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<typeof mockWeatherData>([]);

  useEffect(() => {
    // Simulate API call with a delay
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Helper function to determine weather condition class
  const getWeatherClass = (temp: number, precip: number) => {
    if (temp < 5) return 'bg-blue-50 border-blue-200';
    if (precip > 60) return 'bg-blue-50 border-blue-200';
    if (temp > 20) return 'bg-orange-50 border-orange-200';
    return 'bg-green-50 border-green-200';
  };

  return (
    <div className="py-20 min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            6-Month Weather <span className="text-agri-blue">Forecast (Coming Soon)</span>
          </h1>
          <div className="w-20 h-1 bg-agri-blue mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your farming activities with our 6-month weather predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="border shadow-md">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-6 w-24 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-8 w-16" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))
            : weatherData.map((item, index) => (
                <Card 
                  key={index} 
                  className={`border hover:shadow-lg transition-shadow ${getWeatherClass(item.avgTemp, item.precipitation)}`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle>{item.month}</CardTitle>
                    <CardDescription>Monthly forecast</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      {item.icon}
                      <span className="text-3xl font-bold">{item.avgTemp}°C</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600">
                          <Droplets className="h-4 w-4 mr-1" />
                          <span>Precipitation:</span>
                        </div>
                        <span className="font-medium">{item.precipitation} mm</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600">
                          <CloudFog className="h-4 w-4 mr-1" />
                          <span>Humidity:</span>
                        </div>
                        <span className="font-medium">{item.humidity}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600">
                          <Wind className="h-4 w-4 mr-1" />
                          <span>Wind:</span>
                        </div>
                        <span className="font-medium">{Math.floor(Math.random() * 20) + 5} km/h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How Our Weather Forecasts Help</h3>
          <p className="text-gray-600 mb-4">
            Our 6-month forecasts use advanced meteorological models combined with historical data to provide reliable predictions for your agricultural planning needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-agri-blue-dark">Planting Decisions</h4>
              <p className="text-sm text-gray-600">Time your planting based on predicted rainfall and temperature patterns.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-agri-green-dark">Harvest Planning</h4>
              <p className="text-sm text-gray-600">Plan your harvest around forecasted dry periods to minimize crop damage.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-agri-brown">Resource Management</h4>
              <p className="text-sm text-gray-600">Optimize irrigation based on expected precipitation and evaporation rates.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-medium text-red-700">Risk Mitigation</h4>
              <p className="text-sm text-gray-600">Prepare for extreme weather events with advanced warning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
