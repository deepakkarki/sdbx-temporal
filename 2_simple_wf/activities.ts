// @ts-ignore
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function greet(name: string): Promise<string> {
    return `Hello, ${name}!`;
}

export async function service_1(name: string) {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(`What do you think of ${name}?`);
    rl.close();
    return answer;
}