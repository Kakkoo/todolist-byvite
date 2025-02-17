import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
  },
})
// to deploy to azure app service, we need to give this in Startup command
//   pm2 serve /home/site/wwwroot/dist --no-daemon --spa
//create a new app-service on Azure
//used Azure App Service plugin on VS Code, and used right_+click and deploy to deploy to that 
//app service


