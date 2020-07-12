const Discord = require('discord.js');
const client = new Discord.Client();


const {
    prefix,
    token
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})
client.on('message', message => {
    if (message.content === '${prefix}ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    } else if (message.author.id === '365530592017776650') {
        message.channel.send('u have smol pp');
    }
}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
