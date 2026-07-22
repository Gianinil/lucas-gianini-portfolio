import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // GitHub Pages serves project sites from /<repo-name>/ — update this if
  // the repository is renamed. Root "user.github.io" sites should use '/'.
  base: '/lucas-gianini-portfolio/',
  build: {
    sourcemap: false,
  },
});
