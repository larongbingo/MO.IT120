import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
    base: "https://mo-it-120-cxh68db7u-renz-pagulayans-projects.vercel.app/"
})
