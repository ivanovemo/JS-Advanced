function solve(x1, y1, x2, y2) {
    function isValid(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }

    isValid(x1, y1, 0, 0)
    isValid(x2, y2, 0, 0)
    isValid(x1, y1, x2, y2);
}

solve(3, 0, 0, 4)
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid
solve(2, 1, 1, 1)
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid