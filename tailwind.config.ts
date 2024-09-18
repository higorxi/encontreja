import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      colors: {
        ...colors,
            "border": "hsl(var(--border))",
            "input": "hsl(var(--input))",
            "ring": "hsl(var(--ring))",
            "background": "hsl(var(--background))",
            "foreground": "hsl(var(--foreground))",
            "primary": {
              "DEFAULT": "hsl(var(--primary))",
              "foreground": "hsl(var(--primary-foreground))"
            },
            "secondary": {
              "DEFAULT": "hsl(var(--secondary))",
              "foreground": "hsl(var(--secondary-foreground))"
            },
            "destructive": {
              "DEFAULT": "hsl(var(--destructive))",
              "foreground": "hsl(var(--destructive-foreground))"
            },
            "muted": {
              "DEFAULT": "hsl(var(--muted))",
              "foreground": "hsl(var(--muted-foreground))"
            },
            "accent": {
              "DEFAULT": "hsl(var(--accent))",
              "foreground": "hsl(var(--accent-foreground))"
            },
            "popover": {
              "DEFAULT": "hsl(var(--popover))",
              "foreground": "hsl(var(--popover-foreground))"
            },
            "card": {
              "DEFAULT": "hsl(var(--card))",
              "foreground": "hsl(var(--card-foreground))"
            },
            LaranjaIndustrial: '#FF5E01',
            LaranjaEscuro1: '#F55A00',
            LaranjaEscuro2: '#E05200',
            LaranjaEscuro3: '#CC4B00',
            LaranjaClaro1: '#FF711F',
            LaranjaClaro2: '#FF7E33',
            LaranjaClaro3: '#FF8B47',
            AzulProfundo: '#0558FF',
            AzulEscuro1: '#0052F5',
            AzulEscuro2: '#004BE0',
            AzulEscuro3: '#0044CC',
            AzulClaro1: '#1F69FF',
            AzulClaro2: '#3377FF',
            AzulClaro3: '#4785FF',
            AmareloGastronômica: '#FFD208',
            AmareloEscuro1: '#F5C800',
            AmareloEscuro2: '#E0B700',
            AmareloEscuro3: '#CCA700',
            AmareloClaro1: '#FFD61F',
            AmareloClaro2: '#FFDA33',
            AmareloClaro3: '#FFDD47',
          },
      borderRadius: {
            "lg": "var(--radius)",
            "md": "calc(var(--radius) - 2px)",
            "sm": "calc(var(--radius) - 4px)",
            "2xl": "2.5rem",
            "4xl": "4rem", 
          },
      keyframes: {
            "accordion-down": {
              "from": {
                "height": "0"
              },
              "to": {
                "height": "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              "from": {
                "height": "var(--radix-accordion-content-height)"
              },
              "to": {
                "height": "0"
              }
            }
          }
},
  plugins: [require("tailwindcss-animate")],
};
export default config;
