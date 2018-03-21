const arrays = require(`../arrays.json`)
module.exports = {
	name: 'suicide',
    description: 'Suicide.',
    cooldown: 5,
	execute(m, bot, args) {
        m.channel.send(m.author.toString() +" "+  arrays.suicide[Math.floor(Math.random() * arrays.suicide.length)]);
	},
};