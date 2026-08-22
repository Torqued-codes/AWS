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
        aws: {
          orange: '#FF9900',
          amber: '#FF7700',
          yellow: '#FFB800',
          blue: '#232F3E',
          navy: '#131A22',
          squid: '#161E2E'
        },
      },
      fontFamily: {
        // Hero display headings — Plus Jakarta Sans
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        // Editorial headings — Fraunces  
        heading: ['Fraunces', 'serif'],
        serif: ['Fraunces', 'serif'],
        // Body text — Inter
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Labels/tags — IBM Plex Mono
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
        // Stats/numbers — JetBrains Mono
        stats: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 153, 0, 0.35)',
        'glow-orange-lg': '0 0 45px -8px rgba(255, 153, 0, 0.4)',
        'glow-neon': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'orbit': 'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px -3px rgba(255, 153, 0, 0.3)' },
          '50%': { boxShadow: '0 0 35px -3px rgba(255, 153, 0, 0.6)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
