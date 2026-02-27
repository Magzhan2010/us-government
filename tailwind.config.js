/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020712',
          900: '#070d1f',
          800: '#0c1530',
          700: '#111e42',
        },
        accent: {
          blue: '#4f8ef7',
          orange: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'scan': 'scan 6s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease infinite',
        'fade-up': 'fade-up 0.7s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(79,142,247,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(79,142,247,0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
