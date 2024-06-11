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
      // {
      //   find: '@components',
      //   // eslint-disable-next-line no-undef
      //   replacement: path.resolve(__dirname, 'src/components'),
      // },
      // {
      //   find: 'modules',
      //   // eslint-disable-next-line no-undef
      //   replacement: path.resolve(__dirname, 'src/modules'),
      // },
    ],
  },
});
