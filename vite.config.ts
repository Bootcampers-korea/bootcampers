import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bootcampers/', // 상대 경로로 변경하여 커스텀 도메인 환경에서 정적 자원 문제 해결
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
