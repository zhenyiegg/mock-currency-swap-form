import React from "react";
import Select from "react-select";

const CurrencySelect = ({ label, dataset, selectedCurrency, onChange }) => {
    const options = dataset.map((entry) => ({
        value: entry.currency,
        label: entry.currency,
    }));

    return (
        <div className="currency-select">
            <label>{label}</label>
            <Select
                options={options}
                value={options.find(
                    (option) => option.value === selectedCurrency
                )}
                onChange={onChange}
                isSearchable={true}
            />
        </div>
    );
};

export default CurrencySelect;
