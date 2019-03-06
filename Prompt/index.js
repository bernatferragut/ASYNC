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
    },
    {
        type: 'text',
        name: 'market state',
        message: 'Are we in a range or trend state?',
        initial: 'tell me about the market movement'
    },
    {
        type: 'text',
        name: prev => prev == 'range' ? 'range RLZ' : 'trend RLZ',
        message: (prev) => prev == 'range' ? 'did you apply fib retracement and find RLZ?' : 'did you apply fib extension and find RLZ?',
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'RSI divergence',
        message: 'Do you find divergence in the RSI indicator?',
        // validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'OBV diveregence',
        message: 'Do you find divergence in the OVB indicator?',
        // validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'Fractals',
        message: 'Can you discern any fractal / Inside or Outside canfdle pattern?',
        // validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'M',
        message: 'Can you see clearly if we are going to break an "M"?',
        // validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'W',
        message: 'Can you see clearly if we are going to break an "W"?',
        // validate: resp => resp == 'no' ? 'Today you can not trade buddy' : true,
        initial: 'yes or no'
    },
    {
        type: 'text',
        name: 'Risk Reward Ratio 2:1',
        message: 'Can you get a minimum of 2:1 Risk Reward Ratio?',
        validate: resp => resp == 'no' ? 'You cannot take this trade buddy' : true,
        initial: 'yes or no'
    },
];

(async () => { 
    const response = await prompts(questions) 
    console.log(response); // => { value1: x, value2: y, value3: z }
    // NODE: Write answer in JSON 
    let answer_json = JSON.stringify(response)
    fs.writeFile('./sample.json', answer_json, () => {
        console.log('saved response: ', response)
        })
    // NODE: Read answer from JSON
    fs.readFile('./sample.json', (err, data) => {  
        if (err) throw err;
        p_content = JSON.parse(data)
        console.log('loaded response: ',p_content);
        })
    }  
)()



