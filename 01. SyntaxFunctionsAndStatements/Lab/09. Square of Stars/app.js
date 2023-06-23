function solve(param = 5) {
    for (var i = 0; i < param; i++) {
        let line = "";
        for (var j = 0; j < param; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

solve()