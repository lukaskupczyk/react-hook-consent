import { useConsent } from 'react-hook-consent';
import './App.css';

function App() {
    const { toggleBanner } = useConsent();

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => toggleBanner()}>Toggle Consent Banner</button>
            </header>
        </div>
    );
}

export default App;
