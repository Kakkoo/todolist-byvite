// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      }
    }
  }
})




// to deploy to azure app service, we need to give this in Startup command
//   pm2 serve /home/site/wwwroot/dist --no-daemon --spa
//create a new app-service on Azure
//used Azure App Service plugin on VS Code, and used right_+click and deploy to deploy to that 
//app service

//to deploy through github actions. 
// after a step of deployment, main_todolist1243.mal will be crrated.
// we need to add below code to yml file
// - name: Azure Login
// uses: azure/login@v1
// with:
//   creds: ${{ secrets.AZURE_CREDENTIALS }}

// - name: 'Deploy to Azure Web App'
// id: deploy-to-webapp
// uses: azure/webapps-deploy@v3
// with:
//   app-name: 'todolist1243'
//   publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
//   package: .

// using command prompt and below command, get credentials file
// az ad sp create-for-rbac --name "kanchanwin8@hotmail.com" --sdk-auth > azure_credentials.json

// add this file's content to azure actions secret

// using azure portal, webapp service(todolist1243) -> Deploymet -> Deployment Center -> Manage publish profile -> download publish profile
// put this files content to yml's publish profile area

//azure account should have contributer prevelages
// push your code and deployment will start






