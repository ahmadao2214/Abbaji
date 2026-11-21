/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: 'oklch(var(--paper) / <alpha-value>)',
        'paper-deep': 'oklch(var(--paper-deep) / <alpha-value>)',
        ink: 'oklch(var(--ink) / <alpha-value>)',
        'ink-muted': 'oklch(var(--ink-muted) / <alpha-value>)',
        lake: 'oklch(var(--lake) / <alpha-value>)',
        chinar: 'oklch(var(--chinar) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', '"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'serif'],
        sans: ['"Source Serif 4"', 'Georgia', '"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
      fontSize: {
        name: ['clamp(2.5rem, 5vw + 1rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        title: ['2.25rem', { lineHeight: '1.1' }],
        chapter: ['1.625rem', { lineHeight: '1.2' }],
        lede: ['1.3125rem', { lineHeight: '1.45' }],
        body: ['1.125rem', { lineHeight: '1.6' }],
        register: ['0.9375rem', { lineHeight: '1.4' }],
        note: ['0.875rem', { lineHeight: '1.45' }],
        label: ['0.875rem', { lineHeight: '1.45' }],
        'urdu-name': ['2.25rem', { lineHeight: '2' }],
      },
    },
  },
  plugins: [],
};
