import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss()],
  root: mode === 'demo' ? 'demo' : undefined,
  base: mode === 'demo' ? '/pixel-css/' : '/',
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: mode === 'demo' ? resolve(__dirname, 'dist-demo') : resolve(__dirname, 'dist'),
    emptyOutDir: true,
    ...(mode !== 'demo' && {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'YawnwestCssLibraryTest',
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        formats: ['es', 'cjs'],
      },
      sourcemap: true,
      cssCodeSplit: false,
      rolldownOptions: {
        output: {
          assetFileNames: (info) =>
            info.names?.[0]?.endsWith('.css') ? 'style.css' : 'cursors/[name][extname]',
        },
      },
    }),
  },
}))
