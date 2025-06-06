
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, X, Phone } from 'lucide-react';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would normally be an API call
      if (loginMethod === 'phone') {
        const response = await fetch('http://localhost:5000/api/auth/login-phone', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone }),
        });
        
        if (response.ok) {
          toast.success('OTP sent successfully!');
          // In a real app, we'd handle OTP verification here
        } else {
          toast.error('Failed to send OTP. Please try again.');
        }
      } else {
        const response = await fetch('http://localhost:5000/api/auth/login-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          toast.success('Login successful!');
          navigate('/');
        } else {
          toast.error('Invalid email or password.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={() => navigate('/')}
          >
            <X size={20} />
          </button>
          
          <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
          <p className="text-gray-600 text-center mb-6">Sign in to continue to BiteBuddy</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {loginMethod === 'phone' ? (
              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <div className="flex">
                  <div className="bg-gray-100 text-gray-700 px-3 py-2 border border-gray-300 rounded-l-md flex items-center">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bitebuddy-orange"
                    placeholder="Phone"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 bg-bitebuddy-orange hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send One Time Password'}
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-bitebuddy-orange"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-bitebuddy-orange"
                      placeholder="••••••"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-bitebuddy-orange hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </>
            )}
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">or</p>
            {loginMethod === 'phone' ? (
              <button
                onClick={() => setLoginMethod('email')}
                className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Continue with Email
              </button>
            ) : (
              <button
                onClick={() => setLoginMethod('phone')}
                className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Continue with Phone
              </button>
            )}
            
            <button
              className="w-full mt-4 flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="mr-2">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </button>
            
            <div className="mt-6">
              <p className="text-gray-600">
                New to BiteBuddy? <Link to="/register" className="text-bitebuddy-orange hover:underline">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
