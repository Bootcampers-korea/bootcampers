import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // bootcampers.asia 도메인을 사용하므로 루트 경로로 설정
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
