const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require(./config.json);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '${ prefix }ping') {
        message.reply('pong');
    }
    else if (message.content === 'ping') {
        message.reply('long');
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
