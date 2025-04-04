
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would handle authentication here
    console.log("Login attempt with:", { email, password });
    
    toast({
      title: "Login Successful",
      description: "You have been logged in successfully",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-md w-full border border-black/20 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-black/20 px-4 py-2"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-black/20 px-4 py-2"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-2"
                />
                <label htmlFor="remember">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 hover:bg-black/80 transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
