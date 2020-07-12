app.listen(process.env.PORT);
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);

const Discord = require('discord.js');
//const {
//    prefix,
//    token
//} = require('./config.json');
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

});

client.login(token);
