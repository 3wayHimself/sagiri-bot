const cfg = require(`../config.json`);
module.exports = {
	name: 'site',
    description: 'Get a link to my website.',
    cooldown: 5,
	execute(m, bot, args) {
        m.channel.send(`My website: ` + cfg.site);
	},
};