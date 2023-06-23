function solve(arg) {
    let result = "error";

    if (arg == 'Monday') {
        result = "1";
    } else if (arg == 'Tuesday') {
        result = "2";
    } else if (arg == 'Wednesday') {
        result = "3";
    } else if (arg == 'Thursday') {
        result = "4";
    } else if (arg == 'Friday') {
        result = "5";
    } else if (arg == 'Saturday') {
        result = "6";
    } else if (arg == 'Sunday') {
        result = "7";
    }

    console.log(result)
}

solve('Monday')
solve('Invalid')
solve('Friday')