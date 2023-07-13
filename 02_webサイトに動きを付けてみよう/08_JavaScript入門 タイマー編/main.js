'use strict';

{
    function showClock() {
        setTimeout(() => {
            console.log(new Date());
            showClock;
        }, 1000);
    }

    showClock();
}