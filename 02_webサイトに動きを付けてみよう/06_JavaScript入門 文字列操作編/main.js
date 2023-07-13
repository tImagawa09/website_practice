'use strict';

{
    const emails = [
        'taro@example.com',
        'kintaro@example.com',
        'kojiro@example.com',
    ];

    emails.forEach((email) => {
        const loc = email.indexOf('@');
        // console.log(email.slice(0, loc));
        console.log(email.substring(0, loc));
    })
}