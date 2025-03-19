import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import "@fontsource/tajawal";
// import '@fontsource/tajawal/index.css';


import '@fortawesome/react-fontawesome'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})
