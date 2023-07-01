import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const ENTRIES = readdirSync(resolve(__dirname, 'src/components'))

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: [
        resolve(__dirname, `src/lib.ts`),
        ...ENTRIES.map((e) => resolve(__dirname, `src/components/${e}`)),
      ],
      fileName: (format, entryName) => {
        if (entryName === 'lib') {
          return `index.${format}.js`
        }
        return `${entryName}.${format}.js`
      },
      name: 'DUI',
    },
  },
})
