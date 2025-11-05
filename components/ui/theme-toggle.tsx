// qaspilab/components/ui/theme-toggle.tsx
'use client';

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
    >
      {currentTheme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}