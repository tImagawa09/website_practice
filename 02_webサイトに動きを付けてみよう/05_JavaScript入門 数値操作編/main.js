'use strict';

{
    const scores = [70, 90, 80, 75];
    let max = 0;
    scores.forEach((score) => {
        if (score > max) {
            max = score;
        }
    });
    console.log(max);
    console.log(Math.min(...scores))
}