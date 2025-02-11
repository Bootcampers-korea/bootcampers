import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // 빈 문자열로 설정하여 루트 경로 사용
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
