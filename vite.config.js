import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
  esbuild: {
    loader: 'jsx', 
    include: /\.js$/,
  },
});
