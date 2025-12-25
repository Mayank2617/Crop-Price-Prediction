import { cropsList } from './constants/cropsList';
import { statesList } from './constants/statesList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { stateToSoil } from './constants/stateToSoil'; // adjust the path as needed
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BarChart, LineChart, TrendingUp } from 'lucide-react';

const baseURL = import.meta.env.VITE_API_BASE_URL;
type FormValues = {
  crop: string;
  state: string;
  month: string;
  year: string;
  humidity: string;
  rainfall: string;
  minTemp: string;
  maxTemp: string;
};

const PredictCropPrice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<number | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      crop: '',
      state: '',
      month: '',
      year: new Date().getFullYear().toString(),
      humidity: '',
      rainfall: '',
      minTemp: '',
      maxTemp: '',
    },
  });





  // Crop commodities list


  const handlePredict = async () => {
    const isValid = await form.trigger();
    if (!isValid) return;
    const values = form.getValues(); // get form data
    setIsLoading(true);
    console.log("Form values:", values);

    try {
      const state = values.state;
      const soilArray = stateToSoil[state];

      if (!soilArray || soilArray.length === 0) {
        throw new Error("No soil data found for the selected state.");
      }

      const predominantSoil = soilArray[0]; // or you can randomize: soilArray[Math.floor(Math.random() * soilArray.length)]

      const response = await axios.post(`${baseURL}api/predict`, {
        Commodity: values.crop,
        State: state,
        Month: values.month,
        Year: values.year,
        Humidity: parseFloat(values.humidity),
        Rainfall: parseFloat(values.rainfall),
        Min_Temp: parseFloat(values.minTemp),
        Max_Temp: parseFloat(values.maxTemp),
        "Predominant Soil Types": predominantSoil // this is the key your model expects
      });

      console.log("Prediction response:", response.data);
      console.log("Prediction response:", response.data.mid_price);

      const predicted_price = response.data.mid_price;
      setPredictionResult(predicted_price.toFixed(2));
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Something went wrong while predicting. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const crops = cropsList;
  // States list
  const states = statesList;

  // Months list
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  // Generate next 6 years for selection
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));

  return (
    <div className="py-20 min-h-screen bg-gradient-to-br from-white via-agri-wheat-light/10 to-agri-green-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Predict Crop <span className="text-agri-green">Prices</span>
          </h1>
          <div className="w-20 h-1 bg-agri-green mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our advanced AI model to predict future crop prices and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prediction Form */}
          <Card className="lg:col-span-1 shadow-md">
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>
                Enter details to get an accurate price prediction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="crop"
                    rules={{ required: 'Crop is required' }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Crop Commodities</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select crop" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {crops.map((crop) => (
                              <SelectItem key={crop.value} value={crop.value}>
                                {crop.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    rules={{ required: 'State is required' }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state.value} value={state.value}>
                                {state.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="month"
                      rules={{ required: 'Month is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Month</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem key={month.value} value={month.value}>
                                  {month.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="year"
                      rules={{ required: 'Year is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem key={year.value} value={year.value}>
                                  {year.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />


                    {/* <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem key={year.value} value={year.value}>
                                  {year.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}
                  </div>

                  <FormField
                    control={form.control}
                    name="humidity"
                    rules={{ required: 'Humidity is required' }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Humidity (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter humidity percentage" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="rainfall"
                    rules={{ required: 'Rainfall is required' }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rainfall (mm)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter rainfall in mm" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="minTemp"
                      rules={{ required: 'Min temperature is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Min Temp (°C)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Min" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />


                    <FormField
                      control={form.control}
                      name="maxTemp"
                      rules={{ required: 'Max temperature is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Max Temp (°C)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Max" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handlePredict}
                className="w-full bg-agri-green hover:bg-agri-green-dark"
                disabled={isLoading}
              >
                {isLoading ? "Calculating..." : "Predict Price"}
              </Button>
            </CardFooter>
          </Card>

          {/* Results and Visualization */}
          <Card className="lg:col-span-2 shadow-md">
            <CardHeader>
              <CardTitle>Prediction Results</CardTitle>
              <CardDescription>
                Estimated crop price based on your parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {predictionResult ? (
                <>
                  <div className="bg-agri-green-light/10 rounded-lg p-6 text-center">
                    <p className="text-gray-600 mb-2">Predicted Price</p>
                    <div className="flex items-center justify-center">
                      <TrendingUp className="text-agri-green mr-2 h-6 w-6" />
                      <span className="text-4xl font-bold text-agri-green-dark">
                        ₹{predictionResult}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">per quintal (100 kg)</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Price Trend Analysis (Coming Soon)</h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <LineChart className="h-12 w-12 mx-auto text-agri-blue-dark mb-2" />
                        <p className="text-gray-500">
                          Detailed price charts and trend analysis will be displayed here.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Market Factors (Coming Soon)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <BarChart className="h-5 w-5 text-agri-brown mr-2" />
                          <h4 className="font-medium text-gray-900">Supply Impact</h4>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-agri-brown h-2.5 rounded-full"
                            style={{ width: '65%' }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">65% influence on price</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <BarChart className="h-5 w-5 text-agri-blue mr-2" />
                          <h4 className="font-medium text-gray-900">Demand Forecast</h4>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-agri-blue h-2.5 rounded-full"
                            style={{ width: '78%' }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">78% influence on price</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center max-w-md">
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&h=200&fit=crop&crop=entropy"
                      alt="Prediction placeholder"
                      className="h-32 w-32 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      No Prediction Yet
                    </h3>
                    <p className="text-gray-500">
                      Fill in the parameters on the left and click "Predict Price" to see your crop price forecast.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Prediction Model Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-green">1</span>
              </div>
              <h3 className="font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600 text-sm">
                We gather historical crop prices, weather patterns, and market trends from reliable sources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-brown-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-brown">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Processing</h3>
              <p className="text-gray-600 text-sm">
                Our machine learning algorithms analyze the data to identify patterns and correlations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-blue">3</span>
              </div>
              <h3 className="font-semibold mb-2">Price Prediction</h3>
              <p className="text-gray-600 text-sm">
                The model generates accurate price forecasts based on your specific parameters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictCropPrice;

// const handlePredict = async () => {
//   const values = form.getValues(); // get form data
//   setIsLoading(true);
//   console.log("Form values:", values);
//   try {
//     const response = await axios.post('http://localhost:5000/api/predict', {
//       Commodity: values.crop,
//       State: values.state,
//       Month: values.month,
//       Year: values.year,
//       Humidity: parseFloat(values.humidity),
//       Rainfall: parseFloat(values.rainfall),
//       Min_Temp: parseFloat(values.minTemp),
//       Max_Temp: parseFloat(values.maxTemp),
//     });

//     console.log("Prediction response:", response.data);
//     const { predicted_price } = response.data;
//     setPredictionResult(predicted_price);
//   } catch (error) {
//     console.error("Prediction error:", error);
//     alert("Something went wrong while predicting. Please try again.");
//   } finally {
//     setIsLoading(false);
//   }
// };