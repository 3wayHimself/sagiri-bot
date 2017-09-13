const request = require (`request`);
const googl = require(`node-googl`);
const moment = require(`moment`);
const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send('Pinging...').then(sent => {
        sent.edit(`Pong! Took ${sent.createdTimestamp - m.createdTimestamp}ms. Heartbeat is ${Math.floor(bot.ping)}ms.`);
    });
};