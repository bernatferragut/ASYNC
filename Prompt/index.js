// prompts.js
const prompts = require('prompts');

// const response = await prompts({
//     type: 'number',
//     name: 'value',
//     message: 'How old are you?',
//     validate: value => value < 18 ? `Nightclub is 18+ only` : true
// });

// console.log(response); // => { value: 24 }

( async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });
    
    console.log(response); // => { value: 24 }
})()

