import dataset from "../data/data";

function performCurrencySwap(fromCurrency, toCurrency, amount) {
    const pair = dataset.find(
        (entry) =>
            entry.currency === fromCurrency &&
            entry.date <= currentDateTime &&
            entry.currency === toCurrency &&
            entry.date <= currentDateTime
    );

    if (!pair) {
        return null;
    }

    // Calculate the exchange rate based on the historical prices
    const exchangeRate = pair.price;

    // Calculate the swapped amount
    const swappedAmount = amount * exchangeRate;

    // Create a new entry in the dataset for the swapped amount
    const swapResult = {
        currency: toCurrency,
        date: currentDateTime,
        price: exchangeRate,
    };

    dataset.push(swapResult);

    return swappedAmount;
}

export default performCurrencySwap;
