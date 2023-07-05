import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App'
// tailwindcss config
import './styles/index.css';
import './index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import App from './demo/soshow-test'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <SimpleDemo />  */}
  </React.StrictMode>,
)
