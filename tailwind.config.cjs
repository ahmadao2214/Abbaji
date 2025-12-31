/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        kashmir: {
          burgundy: '#8B2635',
          crimson: '#A52A2A',
          'lake-blue': '#1E3A5F',
          'sky-blue': '#87CEEB',
          'forest-green': '#2C5530',
          gold: '#D4AF37',
          cream: '#F8F6F0',
          'stone-grey': '#8B9DAF',
          'lotus-pink': '#E8B4B8',
          'saffron-orange': '#F4C430',
          'emerald-green': '#50C878',
          'royal-blue': '#4169E1',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'ripple': 'ripple 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        }
      },
      backgroundImage: {
        'dal-lake-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #2C5F8D 50%, #87CEEB 100%)',
        'chinar-gradient': 'linear-gradient(135deg, #8B2635 0%, #A52A2A 50%, #D4AF37 100%)',
      }
    },
  },
  plugins: [],
}
