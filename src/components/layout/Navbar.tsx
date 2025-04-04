
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <header className="w-full">
      <div className="flex justify-between items-center py-3 px-4 md:px-6 border-b border-black/20 dark:border-white/20">
        <Link to="/" className="border border-black/50 dark:border-white/50 py-2 px-5 md:py-3 md:px-10">
          <div className="font-bold text-2xl md:text-3xl">T</div>
        </Link>
        
        {/* Desktop navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-4">
            <form 
              onSubmit={handleSearchSubmit}
              className="relative flex items-center"
            >
              <input
                type="text"
                placeholder="SEARCH"
                className="rounded-full px-4 py-1 pr-10 border border-black/50 dark:border-white/50 bg-transparent text-sm"
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
        )}
        
        {/* Mobile menu button */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 dark:bg-gray-900 dark:text-white">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b dark:border-white/20">
                    <Link to="/" className="font-bold text-2xl">Tatsam</Link>
                    <div className="flex items-center gap-3">
                      <ThemeToggle />
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X size={24} />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto p-4">
                    <form 
                      onSubmit={handleSearchSubmit}
                      className="relative flex items-center mb-6"
                    >
                      <input
                        type="text"
                        placeholder="SEARCH"
                        className="w-full rounded-full px-4 py-2 pr-10 border border-black/50 dark:border-white/50 bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button 
                        type="submit" 
                        className="absolute right-3"
                        aria-label="Search"
                      >
                        <Search size={18} />
                      </button>
                    </form>
                    
                    <nav className="flex flex-col space-y-1">
                      <MobileNavLink to="/">HOME</MobileNavLink>
                      <MobileNavLink to="/about">ABOUT US</MobileNavLink>
                      <MobileNavLink to="/events">EVENTS</MobileNavLink>
                      <MobileNavLink to="/news">NEWS</MobileNavLink>
                      <MobileNavLink to="/members">MEMBERS' CORNER</MobileNavLink>
                      <MobileNavLink to="/gallery">GALLERY</MobileNavLink>
                      <MobileNavLink to="/blog">BLOG</MobileNavLink>
                    </nav>
                  </div>
                  
                  <div className="p-4 border-t dark:border-white/20 flex justify-center gap-6">
                    <Link to="/login" className="font-medium">LOGIN</Link>
                    <Link to="/register" className="font-medium">REGISTER</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>

      {/* Desktop navigation bar */}
      {!isMobile && (
        <nav className="flex border-b border-black/20 dark:border-white/20">
          <Link to="/" className="p-4 flex items-center justify-center border-r border-black/20 dark:border-white/20">
            <div className="bg-black dark:bg-white rounded-full w-6 h-6"></div>
          </Link>
          
          <div className="flex-1 flex justify-between">
            <div className="flex">
              <NavLink to="/about">ABOUT US</NavLink>
              <NavLink to="/events">EVENTS</NavLink>
              <NavLink to="/news">NEWS</NavLink>
              <NavLink to="/members">MEMBERS' CORNER</NavLink>
              <NavLink to="/gallery">GALLERY</NavLink>
            </div>
            <div className="flex items-center">
              <div className="px-4">
                <ThemeToggle />
              </div>
              <NavLink to="/blog">BLOG</NavLink>
            </div>
          </div>
        </nav>
      )}
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
      className="px-6 py-4 flex items-center border-r border-black/20 dark:border-white/20 text-sm hover:bg-secondary transition-colors"
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <SheetClose asChild>
      <Link
        to={to}
        className="block w-full py-3 px-4 border border-black/20 dark:border-white/20 text-center hover:bg-secondary transition-colors"
      >
        {children}
      </Link>
    </SheetClose>
  );
};

export default Navbar;
