
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const handleSunClick = () => {
    setTheme("light");
  };
  
  const handleMoonClick = () => {
    setTheme("dark");
  };
  
  return (
    <div className="flex items-center gap-1.5">
      <Sun 
        size={16} 
        className="text-muted-foreground dark:text-yellow-400 cursor-pointer hover:scale-110 transition-transform" 
        onClick={handleSunClick}
        aria-label="Switch to light mode"
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        className="data-[state=checked]:bg-slate-700"
        aria-label="Toggle dark mode"
      />
      <Moon 
        size={16} 
        className="text-muted-foreground dark:text-blue-400 cursor-pointer hover:scale-110 transition-transform" 
        onClick={handleMoonClick}
        aria-label="Switch to dark mode"
      />
    </div>
  );
};

export default ThemeToggle;
