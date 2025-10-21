import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<username>.github.io use base: '/'
// If you deploy to https://<username>.github.io/<repo>/ set base: '/<repo>/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
