import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // eslint-disable-next-line no-undef
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/common/styles/_variable.scss";`,
      },
    },
  },
});
