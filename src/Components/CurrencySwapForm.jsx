import React, { useState } from "react";
import dataset from "../data/data";
import CurrencySelect from "./CurrencySelect";
import performCurrencySwap from "../helpers/PerformCurrencySwap";

function CurrencySwapForm() {
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [swappedAmount, setSwappedAmount] = useState("");

    const handleFromCurrencyChange = (selectedOption) => {
        setFromCurrency(selectedOption.value);
    };

    const handleToCurrencyChange = (selectedOption) => {
        setToCurrency(selectedOption.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = performCurrencySwap(
            fromCurrency,
            toCurrency,
            amount,
            dataset,
            currentDateTime
        );

        if (result !== null) {
            setSwappedAmount(result);
        } else {
            alert("Currency pair not found in the dataset.");
        }
    };

    return (
        <div className="swap-form">
            <h1>Currency Swap</h1>
            <form onSubmit={handleSubmit}>
                <CurrencySelect
                    label="From Currency"
                    dataset={dataset}
                    selectedCurrency={fromCurrency}
                    onChange={handleFromCurrencyChange}
                />
                <CurrencySelect
                    label="To Currency"
                    dataset={dataset}
                    selectedCurrency={toCurrency}
                    onChange={handleToCurrencyChange}
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <button type="submit">Swap</button>
            </form>
            {swappedAmount && <p>Swapped amount: {swappedAmount}</p>}
        </div>
    );
}

export default CurrencySwapForm;
