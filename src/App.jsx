import React from "react";
import "./App.css";
import CurrencySwapForm from "./Components/currencySwapForm";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <main>
                <CurrencySwapForm />
            </main>
        </div>
    );
}

export default App;

const HeaderComponent = () => {
    return (
        <header className="App-header">
            <h1>EggSwap</h1>
        </header>
    );
};
