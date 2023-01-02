import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-hook-consent/dist/styles/style.css';
import App from './App';
import { ConsentWrapper } from './ConsentWrapper';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ConsentWrapper>
            <App />
        </ConsentWrapper>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
