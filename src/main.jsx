import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ArtistProviderData } from './contexts/artistContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArtistProviderData>
      <App />
    </ArtistProviderData>
  </React.StrictMode>
)
