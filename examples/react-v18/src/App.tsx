import { useConsent } from 'react-hook-consent';
import './App.css';

function App() {
    const { setShowBanner } = useConsent();

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => setShowBanner()}>Show Consent Banner</button>
            </header>
        </div>
    );
}

export default App;
