import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    react(),
    {
      // Emit version.json from package.json so deployed clients can detect new builds
      name: 'emit-version-json',
      apply: 'build',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'version.json',
          source: JSON.stringify({ version: pkg.version }),
        })
      },
    },
  ],
  base: '/',
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
