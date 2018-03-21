const cfg = require(`../config.json`);
module.exports = {
	name: 'repo',
    description: 'Get a link to my repository.',
	execute(m, bot, args) {
		m.channel.send(`View my repository here: ${cfg.repo}`);
	},
};