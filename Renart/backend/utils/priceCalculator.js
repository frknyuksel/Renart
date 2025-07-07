const calculatePrice = (popularityScore, weight, goldPricePerOunce) => {
    const weightInOunce = weight / 31.1035;
    const price = (popularityScore + 1) * weightInOunce * goldPricePerOunce;
    return price.toFixed(2);
};

module.exports = calculatePrice;
