function solve(num1, num2) {
    let greatestNumber = 0;
    for (let i = 1; i <= 9; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            greatestNumber = i;
        }
    }

    console.log(greatestNumber)
}

solve(15, 5)

solve(2154, 458)