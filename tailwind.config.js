/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './public/**/*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Custom retro palette
        'retro-dark': '#0f172a',
        'retro-bg': '#1e293b',
        'purple-primary': '#a855f7',
        'purple-dark': '#7c3aed',
        'purple-light': '#d8b4fe',
        'gold-accent': '#fbbf24',
        'gold-light': '#fcd34d',
      },
      fontFamily: {
        mono: ["'Courier New'", 'Courier', 'monospace'],
        retro: ["'JetBrains Mono'", "'Courier New'", 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      },
      boxShadow: {
        retro: '4px 4px 0 rgba(168, 85, 247, 0.3)',
        'retro-gold': '4px 4px 0 rgba(251, 191, 36, 0.3)',
      },
    },
  },
  plugins: [],
}
