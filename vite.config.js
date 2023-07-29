import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

export default defineConfig({
  plugins: [checker({
    typescript: true,
    eslint: {
      lintCommand: 'eslint "./src/**/*.{ts,vue}"',
    },
    terminal: true,
    overlay: true,
  })],
});
