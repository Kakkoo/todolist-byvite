import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { todosSlice } from './todosSlice'
import { loadingSlice } from './loadingSlice.js'
import './index.css'
import App from './App.jsx'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div>Vite + React </div>
    <App />
    </Provider>  
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <div>Vite + React </div>
//     <App />
//     </Provider>  
//   </StrictMode>,
// )
