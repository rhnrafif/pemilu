import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SekolahProvider from './user/SekolahProvider'
import AdminProvider from './user/AdminProvider'
import InputProvider from './user/InputProvider'
import SmpProvider from './user/SmpProvider'
import User from './user/User'



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <User>
        <SekolahProvider>
          <AdminProvider>
            <InputProvider>
              <SmpProvider>
                <App />
              </SmpProvider>
            </InputProvider>
          </AdminProvider>
        </SekolahProvider>
      </User>
    </BrowserRouter>
  
)
