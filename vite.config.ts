import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss()],
  root: mode === 'playground' ? 'playground' : undefined,
  base: mode === 'playground' ? '/pixel-css/' : '/',
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir:
      mode === 'playground' ? resolve(__dirname, 'dist-playground') : resolve(__dirname, 'dist'),
    emptyOutDir: true,
    ...(mode !== 'playground' && {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'YawnwestCssLibraryTest',
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        formats: ['es', 'cjs'],
      },
      sourcemap: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: () => 'style.css',
        },
      },
    }),
  },
}))
