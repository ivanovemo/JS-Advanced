function solve(arr) {
    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(arr.reduce((a, b) => a + 1 / b, 0));
    console.log(arr.reduce((a, b) => a + b, ''));
}

solve([1, 2, 3])
solve([2, 4, 8, 16])