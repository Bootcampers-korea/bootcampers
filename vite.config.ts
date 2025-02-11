import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bootcampers/', // GitHub 저장소 이름으로 다시 설정
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
