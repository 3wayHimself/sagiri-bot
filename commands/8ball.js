const arrays = require(`../arrays.json`)

exports.run = (m, bot, args) => {
    if (args[1]) m.channel.send(arrays.ball[Math.floor(Math.random() * arrays.ball.length)]); 
    else m.channel.send(`Please ask something ;-;`);
};