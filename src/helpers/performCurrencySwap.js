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

    const exchangeRate = fromPair.price / toPair.price;

    const swappedAmount = amount * exchangeRate;

    const swapResult = {
        currency: toCurrency,
        date: currentDateTime,
        price: exchangeRate,
    };

    dataset.push(swapResult);

    return swappedAmount;
}

export default performCurrencySwap;
