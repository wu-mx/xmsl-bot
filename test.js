import OpenAI from 'openai';
import * as fs from "node:fs";

let prompt = fs.readFileSync('prompt.txt', 'utf8');
let question = '我用java互通基岩的插件去连基岩互通java的服务器'

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    baseURL: 'https://api.theb.ai/v1'
});

async function test() {
    const chatCompletion = await client.chat.completions.create({
        messages: [
            {role: "system", content: prompt},
            {role: 'user', content: question}
        ],
        model: 'gpt-3.5-turbo',

    });
    console.log(`Question: ${question}`);
    console.log(chatCompletion.choices[0].message.content);
}

test();