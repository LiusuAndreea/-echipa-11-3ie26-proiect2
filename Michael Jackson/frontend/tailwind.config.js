/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          purple: '#9333ea',
          'purple-light': '#a855f7',
          pink: '#ec4899',
          'pink-light': '#f472b6',
          cyan: '#22d3ee',
          'cyan-light': '#67e8f9',
          dark: '#09090b',
          glass: 'rgba(255,255,255,0.05)',
        },
      },
      boxShadow: {
        'glow-purple': '0 0 25px rgba(147,51,234,0.45)',
        'glow-pink': '0 0 25px rgba(236,72,153,0.45)',
        'glow-cyan': '0 0 25px rgba(34,211,238,0.45)',
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        card: '0 4px 24px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #09090b 0%, #1a0533 45%, #0d0d1a 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(147,51,234,0.12), rgba(236,72,153,0.12))',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        blob: 'blob 8s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(147,51,234,0.4)' },
          '50%': { boxShadow: '0 0 45px rgba(147,51,234,0.75)' },
        },
        blob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.12)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
