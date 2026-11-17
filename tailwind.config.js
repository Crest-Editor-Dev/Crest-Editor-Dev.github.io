/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#080b11',
          subtle: '#0c1017',
        },
        panel: {
          DEFAULT: '#0f1420',
          hover: '#141c2c',
          border: '#1b2434',
        },
        brand: {
          blue: '#3b82f6',
          cyan: '#38bdf8',
          indigo: '#6366f1',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'zed-grid': "radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.08) 1px, transparent 0)",
        'zed-glow': "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15), transparent 70%)",
      }
    },
  },
  plugins: [],
};
