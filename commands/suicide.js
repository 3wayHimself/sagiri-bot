const arrays = require(`../arrays.json`)
const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send(m.author.toString() +" "+  arrays.suicide[Math.floor(Math.random() * arrays.suicide.length)])
};