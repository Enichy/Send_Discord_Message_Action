/*
** EPITECH PROJECT, 2023
** Send_Discord_Message_Action
** File description:
** index.js
*/

const core = require('@actions/core');
const exec = require('@actions/exec');

const getInput = core.getInput;
const setOutput = core.setOutput;
const setFailed = core.setFailed;

function validate_inputs()
{
    if (!core.getInput('github_token')) {
        throw new Error('Missing github_token input');
    }
    if (!core.getInput('discord_webhook')) {
        throw new Error('Missing discord_webhook input');
    }
    if (!core.getInput('message')) {
        throw new Error('Missing message input');
    }
}
async function run() {
    try {
        validate_inputs();
        const github_token = getInput('github_token');
        const discord_webhook = getInput('discord_webhook');
        const message = getInput('message');
        
        const command = `curl -X POST -H 'Content-type: application/json' --data '{"content": "${message}"}' ${discord_webhook}`;

        await exec.exec(command, [], { env: { GITHUB_TOKEN: github_token } });

        core.setOutput('status', '0');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
