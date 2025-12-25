import { statesList } from '../components/constants/statesList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { stateToSoil } from "../components/constants/stateToSoil"; // Adjust the import path if needed
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sprout, TrendingUp } from 'lucide-react';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;
type FormValues = {
  state: string;
  month: string;
  year: string;
};

const CropAdvisoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationResults, setRecommendationResults] = useState<any[] | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      state: '',
      month: '',
      year: new Date().getFullYear().toString(),
    },
  });

  const monthMap = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "June",
    July: "July",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };





  const handleGetRecommendations = async () => {
    const values = form.getValues();
    const selectedState = values.state;
    const selectedMonth = values.month;
    console.log("Selected Month:", selectedMonth); // Debugging line
    console.log("Selected State:", selectedState); // Debugging line
    const soilArray = stateToSoil[selectedState];
    const selectedSoil = soilArray[0];
    console.log("Selected Soil:", selectedSoil); // Debugging line

    const requestData = {
      state: selectedState,
      soil: selectedSoil,
      month: selectedMonth,
    };

    try {
      const response = await axios.post(`${baseURL}api/advisory`, requestData);
      const data = response.data.results;
      console.log("Response Data:", data); // Debugging line
      // Convert response to frontend format
      const formattedResults = data.map(([crop, value], index) => ({
        id: index,
        crop,
        category: (value > 90 ? "Very High" : value >= 70 ? "High" : value >= 50 ? "Moderate" : "Low") // You can adjust this logic
      }));

      setRecommendationResults(formattedResults);
    } catch (error) {
      console.error("Error fetching crop recommendations:", error);
    }
  };



  const months = [
    { value: 'Jan', label: 'January' },
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'Aug', label: 'August' },
    { value: 'Sep', label: 'September' },
    { value: 'Oct', label: 'October' },
    { value: 'Nov', label: 'November' },
    { value: 'Dec', label: 'December' },
  ];

  const states = statesList;

  // Generate next 6 years for selection
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 min-h-screen bg-gradient-to-br from-white via-agri-wheat-light/10 to-agri-brown-light/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Crop <span className="text-agri-brown">Advisory</span>
              </h1>
              <div className="w-20 h-1 bg-agri-brown mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get personalized crop recommendations based on your location and timing to maximize your profits.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Form */}
              <Card className="lg:col-span-1 shadow-md">
                <CardHeader>
                  <CardTitle>Input Parameters</CardTitle>
                  <CardDescription>
                    Enter details to get crop recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form className="space-y-4">
                      <FormField
                        control={form.control}
                        name="state"
                        rules={{ required: "State is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
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
                            <FormDescription>
                              Select your state for region-specific recommendations
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="month"
                        rules={{ required: "Month is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Month</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select month" />
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
                        rules={{ required: "Year is required" }}
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
                      />
                    </form>
                  </Form>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={form.handleSubmit(handleGetRecommendations)}
                    className="w-full bg-agri-brown hover:bg-agri-brown-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? "Analyzing..." : "Get Recommendations"}
                  </Button>

                </CardFooter>
              </Card>

              {/* Results Table */}
              <Card className="lg:col-span-2 shadow-md">
                <CardHeader>
                  <CardTitle>Crop Recommendations</CardTitle>
                  <CardDescription>
                    Most profitable crops for your selected parameters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {recommendationResults ? (
                    <Table>
                      <TableCaption>Top crop recommendations for maximum profitability</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Crop</TableHead>
                          <TableHead>Potential</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recommendationResults.map((crop, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{crop.crop}</TableCell>
                            <TableCell>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${crop.category === 'Very High'
                                  ? 'bg-green-100 text-green-800'
                                  : crop.category === 'High'
                                    ? 'bg-blue-100 text-blue-800'
                                    : crop.category === 'Moderate'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-red-100 text-red-800'}`}
                              >
                                {crop.category}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center max-w-md">
                        <Sprout className="h-16 w-16 mx-auto text-agri-brown opacity-50 mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                          No Recommendations Yet
                        </h3>
                        <p className="text-gray-500">
                          Fill in the parameters on the left and click "Get Recommendations" to see the most profitable crops for your region and season.
                        </p>
                      </div>
                    </div>
                  )}

                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Crop Advisory Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-agri-brown-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-agri-brown">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Data Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    We analyze historical crop prices, market trends, and seasonal patterns specific to your region.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-agri-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-agri-green">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Profit Calculation</h3>
                  <p className="text-gray-600 text-sm">
                    Our algorithms calculate the potential profit for each crop based on predicted prices and growing conditions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-agri-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-agri-blue">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Recommendations</h3>
                  <p className="text-gray-600 text-sm">
                    We provide you with a ranked list of crops with the highest profit potential for your specific context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropAdvisoryPage;
