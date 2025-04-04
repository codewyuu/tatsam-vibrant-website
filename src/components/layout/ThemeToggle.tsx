
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-1.5">
      <Sun size={16} className="text-muted-foreground dark:text-yellow-400" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-700"
        aria-label="Toggle dark mode"
      />
      <Moon size={16} className="text-muted-foreground dark:text-blue-400" />
    </div>
  );
};

export default ThemeToggle;
