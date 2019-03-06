// prompts.js
const prompts = require('prompts');
const fs = require('fs')
let p_content

let questions = [
    {
        type: 'number',
        name: 'hours of sleep',
        message: 'How many hours did you sleep tonight?',
        validate: hours => hours < 8 ? 'Today you can not trade buddy' : true,
        initial: '10'
    },
    {
        type: 'text',
        name: 'physcial state',
        message: 'Do you feel rested?',
        validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'

    },
    {
        type: 'text',
        name: 'mental state',
        message: 'Do you feel focused enough to trade today?',
        validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    }
];

(async () => { 
    const response = await prompts(questions) 
    console.log(response); // => { value1: x, value2: y, value3: z }
    // NODE: Write answer in JSON 
    let answer_json = JSON.stringify(response)
    fs.writeFile('./sample.json', answer_json, () => {
        console.log('response: ', response)
        })
    // NODE: Read answer from JSON
    fs.readFile('./sample.json', (err, data) => {  
        if (err) throw err;
        p_content = JSON.parse(data)
        console.log(p_content);
        })
    }  
)()



