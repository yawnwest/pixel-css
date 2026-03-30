import { defineConfig } from 'vite'
import { resolve } from 'path'
import type { Plugin } from 'vite'

function injectCssImport(): Plugin {
  return {
    name: 'inject-css-import',
    generateBundle(_options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'chunk' && chunk.isEntry) {
          if (fileName.endsWith('.js')) {
            chunk.code = `import './style.css';\n` + chunk.code
          } else if (fileName.endsWith('.cjs')) {
            chunk.code = `require('./style.css');\n` + chunk.code
          }
        }
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: mode !== 'demo' ? [injectCssImport()] : [],
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
