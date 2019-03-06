// prompts.js
const prompts = require('prompts');
const fs = require('fs')
let p_content

let questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'How old are you?'
    },
    {
        type: 'text',
        name: 'about',
        message: 'Tell something about yourself',
        initial: 'Why should I?'
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


/* ASKING QUESTIONS BEFORE TAKING A TRADE
  1. LOCATION - FIBS
  2. DIVERGENCE - Contrarian Momentum
  3. FRACTAL - M,W,H&S
  4. CANDLES - inner, outer
  5. ELLIOT WAVES
  6. RISK REWARD RATIO - Minimum 2.0?
*/



