function solve(text) {
    const regex = /[A-z0-9]+/g;
    console.log(text.match(regex).join(', ').toUpperCase());
}

solve('Hi, how are you?');