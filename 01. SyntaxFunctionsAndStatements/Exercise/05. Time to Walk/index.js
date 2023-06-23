function solve(steps, stepLength, speed) {
    const distanceInMeters = steps * stepLength;
    const speedInMetersPerSecond = speed / 3.6;
    const breaksInSeconds = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSecond + breaksInSeconds;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    
    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ""}${seconds}`);
}
//every 500m => 1 min break
//hours:minutes:seconds
solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)