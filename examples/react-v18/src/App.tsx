import { useCallback } from 'react';
import { useConsent } from 'react-hook-consent';
import './App.css';

function App() {
    const { toggleBanner } = useConsent();

    const setExampleCookie = useCallback(() => {
        document.cookie = `example_cookie=helloworld`;
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => toggleBanner()}>Toggle Consent Banner</button>
                <button onClick={setExampleCookie}>Set example cookie</button>
            </header>
        </div>
    );
}

export default App;
