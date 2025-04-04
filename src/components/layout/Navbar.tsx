
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <header className="w-full">
      <div className="flex justify-between items-center py-3 px-6 border-b border-black/20">
        <Link to="/" className="border border-black/50 py-3 px-10">
          <div className="font-bold text-3xl">T</div>
        </Link>
        
        <div className="flex items-center space-x-4">
          <form 
            onSubmit={handleSearchSubmit}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="SEARCH"
              className="rounded-full px-4 py-1 pr-10 border border-black/50 bg-transparent text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
          </form>
          
          <div className="flex gap-4 items-center">
            <Link to="/login" className="text-xs font-medium">LOGIN</Link>
            <Link to="/register" className="text-xs font-medium">REGISTER</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <nav className="flex border-b border-black/20">
        <Link to="/" className="p-4 flex items-center justify-center border-r border-black/20">
          <div className="bg-black rounded-full w-6 h-6"></div>
        </Link>
        
        <div className="flex-1 flex">
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/events">EVENTS</NavLink>
          <NavLink to="/news">NEWS</NavLink>
          <NavLink to="/members">MEMBERS' CORNER</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
        </div>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-6 py-4 flex items-center border-r border-black/20 text-sm hover:bg-secondary transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar;
