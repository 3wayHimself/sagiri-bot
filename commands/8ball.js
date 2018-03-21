const arrays = require(`../arrays.json`);
module.exports = {
	name: '8ball',
    description: 'Ask a question and I will reply Yes/No/Maybe.',
    syntax: '{question}',
    cooldown: 5,
    args: true,
	execute(m, bot, args) {
        m.channel.send(arrays.ball[Math.floor(Math.random() * arrays.ball.length)]); 
	},
};