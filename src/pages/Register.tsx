
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would handle registration here
    console.log("Registration attempt with:", { name, email, password });
    
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-md w-full border border-black/20 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-black/20 px-4 py-2"
                required
              />
            </div>
            
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
            
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-black/20 px-4 py-2"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2"
                required
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 hover:bg-black/80 transition-colors"
            >
              Register
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
