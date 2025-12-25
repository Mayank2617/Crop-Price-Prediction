import { useAuth } from '@/context/AuthContext'; // adjust path if needed
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
const baseURL = import.meta.env.VITE_API_BASE_URL;

type LoginFormValues = {
  identifier: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // const { login: authLogin } = useAuth(); // get the login function
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      identifier: '',
      password: '',
      rememberMe: true,
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${baseURL}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.identifier,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        login(result.token, result.user); // 👈 Context-based login
        toast.success("Login successful!");
        navigate("/");
      } else {
        const errorMessage = result?.message || "Invalid credentials. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("Login failed. Please check your internet connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };




  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left column - Login form */}
            <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-md animate-fade-in">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4 text-agri-green-dark"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>

              <h1 className="text-2xl md:text-3xl font-bold text-agri-green-dark mb-2">Welcome Back</h1>
              <p className="text-gray-600 mb-6">Sign in to your account to continue</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="identifier">Email or Phone</Label>
                  <Input
                    id="identifier"
                    type="text"
                    placeholder="Enter your email or phone number"
                    {...register('identifier', {
                      required: 'Email or phone number is required'
                    })}
                    className={errors.identifier ? 'border-red-500' : ''}
                  />
                  {errors.identifier && (
                    <p className="text-red-500 text-sm">{errors.identifier.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      {...register('password', {
                        required: 'Password is required'
                      })}
                      className={errors.password ? 'border-red-500' : ''}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rememberMe" {...register('rememberMe')} />
                    <Label htmlFor="rememberMe" className="text-sm cursor-pointer">Remember me for a month</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-agri-green hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-agri-green hover:bg-agri-green-dark text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>

                <p className="text-center text-gray-600 mt-4">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-agri-green hover:underline font-medium">
                    Register Now
                  </Link>
                </p>
              </form>
            </div>

            {/* Right column - Image */}
            <div className="hidden lg:block w-1/2 animate-fade-in-right">
              <div className="h-full rounded-lg overflow-hidden bg-agri-green-light/20 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-agri-green-dark mb-4">Grow Your Farming Business</h2>
                <p className="text-gray-700 mb-6">
                  Log in to access personalized crop price predictions and weather forecasts tailored to your region.
                </p>
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                    alt="Farming landscape"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                  />
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

export default LoginPage;

