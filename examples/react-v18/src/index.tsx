import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConsentBanner, ConsentOptions, ConsentProvider } from 'react-hook-consent';
import 'react-hook-consent/dist/styles/style.css';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const consentOptions: ConsentOptions = {
    services: [{ id: 'myid', name: 'MyName', scripts: [{ id: 'main', src: 'https://mysciript.com/script.js' }] }],
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ConsentProvider options={consentOptions}>
            <App />
            <ConsentBanner />
        </ConsentProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
