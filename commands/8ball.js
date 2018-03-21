const arrays = require(`../arrays.json`);
module.exports = {
	name: 'ping',
    description: 'Check my latency.',
    cooldown: 5,
    args: true,
	execute(m, bot, args) {
        m.channel.send(arrays.ball[Math.floor(Math.random() * arrays.ball.length)]); 
	},
};