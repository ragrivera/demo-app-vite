import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({
      typescript: true, // If you're using TypeScript
      overlay: true,    // Shows error overlay in the browser
      // Add Biome checker
      biome: {
        command: 'lint',
      },
    }),
  ],
});