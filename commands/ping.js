module.exports = {
	name: 'ping',
    description: 'Check my latency.',
    cooldown: 5,
	execute(m, bot, args) {
        m.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took ${sent.createdTimestamp - m.createdTimestamp}ms. Heartbeat is ${Math.floor(bot.ping)}ms.`);
        });
	},
};