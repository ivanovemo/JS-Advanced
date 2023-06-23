function largest(first, second, third) {
    let result;
    if (first > second && first > third) {
        result = `The largest number is ${first}.`
    } else if (second > first && second > third) {
        result = `The largest number is ${second}.`
    }
    else {
        result = `The largest number is ${third}.`
    }

    console.log(result)
}

largest(1, 2, 3)
largest(2, 5, 1)
largest(10, 5, 1)