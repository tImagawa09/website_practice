'use sprict';

{
    const scores = [70, 90, 80, 85];

    scores.push(77, 88)

    for (let i=0; i<scores.length; i++) {
        console.log(scores[i]);
    }

    scores.forEach((score, IDBIndex) => {
        console.log(`${index}: ${score}`);
    })


}