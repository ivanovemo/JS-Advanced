function solve(number) {
    number = number.toString();
    const numberIs =  number[0];
    let sameNumbers = 0;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (numberIs === number[i]) {
            sameNumbers++;
        }
        sum += Number(number[i]);
    }

    if (number.length === sameNumbers) {
        console.log('true')
        console.log(sum)
    } else {
        console.log('false')
        console.log(sum)
    }
}

solve(2222222)
solve(1234)

//RE-solve it!!!s