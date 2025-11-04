import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Qaspilab Brand Colors
        brand: {
          graphite: "#1A1A1A",
          white: "#FFFFFF",
          purple: "#8B5CF6",
          blue: "#06B6D4",
          neon: "#00D4FF",
        },
        
        // Shadcn Colors with Brand Integration
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A1A1A", // brand.graphite
          foreground: "#FFFFFF", // brand.white
        },
        secondary: {
          DEFAULT: "#8B5CF6", // brand.purple
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#06B6D4", // brand.blue
          foreground: "#FFFFFF",
        },
        neon: {
          DEFAULT: "#00D4FF", // brand.neon
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Typography
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      // Typography sizes handled via CSS classes
      // fontSize extended with custom sizes if needed
      
      // Animation & Transitions
      transitionDuration: {
        '150': '150ms', // micro-animations
        '300': '300ms', // smooth transitions
        '2000': '2000ms', // hero animations
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      // Custom Animations
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hero-glow': 'hero-glow 3s ease-in-out infinite alternate',
        'light-beam': 'light-beam 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'hero-glow': {
          '0%': { 
            textShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)' 
          },
          '100%': { 
            textShadow: '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.3)' 
          },
        },
        'light-beam': {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%)',
            transform: 'translateX(-100%)'
          },
          '50%': { 
            transform: 'translateX(100%)'
          },
        },
      },
      
      // Gradient Utilities
      backgroundImage: {
        'lab-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #8B5CF6 50%, #00D4FF 100%)',
        'lab-gradient-subtle': 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(0, 212, 255, 0.1) 100%)',
        'hero-bg': 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      // Box Shadow
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-neon': '0 0 20px rgba(0, 212, 255, 0.3)',
        'lab-card': '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config