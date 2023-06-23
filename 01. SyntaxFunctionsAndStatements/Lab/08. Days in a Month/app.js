function solve(month, year) {
    const date = new Date(year, month, 1);

    date.setDate(date.getDate() - 1);
    
    console.log(date.getDate())
}

solve(1, 2012)
solve(2, 2021)
solve(4, 2021)