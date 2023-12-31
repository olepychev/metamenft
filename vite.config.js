import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '172.93.193.199', // Replace with your desired IP address
  },
  esbuild: {
    // minify: false,
    // minifySyntax: false
    jsxInject: `import React from 'react'`
  },
  // build: {
  //   minify: false,
  //   minifySyntax: false
  // },
  optimizeDeps: {
    include: ['@solana/wallet-adapter-react-ui']
  },
  plugins: [
    react(),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        'fs', // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://172.93.193.199:3307/api', // Your API endpoint
  //       changeOrigin: true,
  //     },
  //   },
  // }
})
