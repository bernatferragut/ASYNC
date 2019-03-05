// Enquirer - Prompt Runner -  https://github.com/enquirer/enquirer
const { prompt } = require('enquirer')
const fs = require('fs')
let p_content

/* ASKING QUESTIONS BEFORE TAKING A TRADE
  1. LOCATION - FIBS
  2. DIVERGENCE - Contrarian Momentum
  3. FRACTAL - M,W,H&S
  4. CANDLES - inner, outer
  5. ELLIOT WAVES
  6. RISK REWARD RATIO - Minimum 2.0?
*/

// QUESTIONS
const  questions = [
  {
    type: 'input',
    name: 'Hours of sleep',
    message: 'How many hours did you sleep?'
  },
  {
    type: 'input',
    name: 'feeling rested',
    message: 'Do you feel rested?'
  }
]

// PROMPT RUNNER ES5
prompt(questions)
.then(answer => {
  // NODE: Write answer in JSON 
  let answer_json = JSON.stringify(answer)
  fs.writeFile('./sample.json', answer_json, () => {
    console.log('answer: ', answer)
  })
  // NODE: Read answer from JSON
  fs.readFile('./sample.json', (err, data) => {  
    if (err) throw err;
    p_content = JSON.parse(data)
    console.log(p_content);
  });

})
.catch(console.error);

// PROMPT RUNNER ES7
