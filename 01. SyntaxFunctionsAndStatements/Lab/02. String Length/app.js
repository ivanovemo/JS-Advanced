function calculation(param1, param2, param3) {
    const sumLength = param1.length + param2.length + param3.length;
    const averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength)
}


calculation('chocolate', 'ice cream', 'cake');
calculation('pasta', '5', '22.3');