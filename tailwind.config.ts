import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#BD93F9',
        gray: '#8B8D98',
      },
      backgroundColor: {
        light: '#FFFFFF',
        dark: '#111111',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
} satisfies Config;