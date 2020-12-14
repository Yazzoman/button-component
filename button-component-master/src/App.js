import React from 'react'
import './css/App.css'
import JazzoButton from './components/jazzo-button'

function App() {
    return (
        <div className="App">
            <div className="button-window">
                <h1>Example Button</h1>
                <h2>Select different options to the right</h2>
                <JazzoButton>
                    Default
                </JazzoButton>
            </div>
            <div className="controls">
                
            </div>
        </div>
    )
}

export default App;
