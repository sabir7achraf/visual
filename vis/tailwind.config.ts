import type { Config } from "tailwindcss";

const flattenColorPalette = (
    colors: Record<string, string | Record<string, string>>,
    prefix = ""
): Record<string, string> => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      Object.assign(acc, flattenColorPalette(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {} as Record<string, string>);
};

// Define more specific types for addBase and theme functions
const addVariablesForColors = ({
                                 addBase,
                                 theme,
                               }: {
  addBase: (styles: Record<string, Record<string, string>>) => void;
  theme: (path: string) => unknown;
}) => {
  const allColors = flattenColorPalette(theme("colors") as Record<string, string>);
  const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
