'use strice';

{
    // アロー関数式
    const double = (num) => {
        return num * 2;
    };

    const calc = (num, func) => {
        return func(num);
    }

    console.log(calc(20, double));
    console.log(calc(20, (num) => {
        return num * 2;
    }));

}