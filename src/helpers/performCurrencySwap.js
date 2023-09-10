function performCurrencySwap(
    fromCurrency,
    toCurrency,
    amount,
    dataset,
    currentDateTime
) {
    const fromPair = dataset.find(
        (entry) =>
            entry.currency === fromCurrency && entry.date <= currentDateTime
    );

    const toPair = dataset.find(
        (entry) =>
            entry.currency === toCurrency && entry.date <= currentDateTime
    );

    if (!fromPair || !toPair) {
        return null;
    }

    // Calculate the exchange rate based on the historical prices
    const exchangeRate = fromPair.price / toPair.price;

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
