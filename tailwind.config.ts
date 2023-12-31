import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'overlay': 'rgba(0, 0, 0, 0.3)',
        'searchOverlay': 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
