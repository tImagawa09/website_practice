'use strict';

{
    let isDevMode = true;
    const pElement = document.querySelector('p');
    const buttonElement = document.querySelector('button');

    buttonElement.addEventListener('click', () => {
        if (isDevMode === true) {
            pElement.textContent = 'Dev Mode is Off';
            // isDevMode = false; 
            isDevMode = !isDevMode
        } else {
            pElement.textContent = 'Dev Mode is ON';
            // isDevMode = true;
        }
        isDevMode = !isDevMode;
    })
}