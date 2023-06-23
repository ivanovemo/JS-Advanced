function solve(fruit, grams, pricePerKg) {
    let weightInKg = grams / 1000;
    let finalPrice = weightInKg * pricePerKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);