import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  ThemeProvider }  from './context/modeContext.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
