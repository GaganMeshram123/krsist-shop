import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { lightTheme } from './utils/themes'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}> {/* Ensure this line is present */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals(); // Ensure this function is called correctly
