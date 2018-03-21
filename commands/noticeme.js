module.exports = {
	name: 'noticeme',
    description: 'I will mention you.',
    cooldown: 5,
    aliases: ['mentionme'],
	execute(m, bot, args) {
        m.channel.send(`I've noticed you, ${m.author.toString()}. Be happy.`);
	},
};