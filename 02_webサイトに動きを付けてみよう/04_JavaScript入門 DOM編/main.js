'use strict';

{
    document.querySelector('button').addEventListener('click', () => {
        document.querySelectorAll('li').forEach((li) => {
            li.textContent = 'changed'
        });
    });
}