/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F0",
        surface: "#FFFFFF",
        linen: "#F7F5F0",
        forest: "#1E3A2F",
        moss: "#1A221C",
        sage: "#A1B29E",
        sky: "#A5B8C7",
        terracotta: "#C9644B",
        kraft: "#D2B48C",
        ink: "#1A221C",
        mute: "#5C6A61",
        edge: "#E5E0D8",
        border: "#E5E0D8",
        // shadcn compatibility
        foreground: "#1A221C",
        primary: {
          DEFAULT: "#1E3A2F",
          foreground: "#F7F5F0",
        },
        secondary: {
          DEFAULT: "#A1B29E",
          foreground: "#1A221C",
        },
        muted: {
          DEFAULT: "#EFEBE3",
          foreground: "#5C6A61",
        },
        accent: {
          DEFAULT: "#C9644B",
          foreground: "#FFFFFF",
        },
        card: { DEFAULT: "#FFFFFF", foreground: "#1A221C" },
        popover: { DEFAULT: "#FFFFFF", foreground: "#1A221C" },
        destructive: { DEFAULT: "#B03A2E", foreground: "#FFFFFF" },
        input: "#E5E0D8",
        ring: "#1E3A2F",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.22,1,0.36,1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.22,1,0.36,1)",
        ticker: "ticker 38s linear infinite",
        float: "float 7s cubic-bezier(0.45,0,0.55,1) infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
