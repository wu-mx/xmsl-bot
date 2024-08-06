import OpenAI from 'openai';
import * as fs from "node:fs";

let prompt = fs.readFileSync('prompt.txt', 'utf8');
const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    baseURL: 'https://api.theb.ai/v1'
});

async function GenerateAnswer(question) {
    const chatCompletion = await client.chat.completions.create({
        messages: [
            { role: "system", content: prompt },
            { role: 'user', content: question }
        ],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices[0].message.content;
}

export { GenerateAnswer }