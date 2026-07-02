import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset paths for AccuWebHosting and Vercel compatibility
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
