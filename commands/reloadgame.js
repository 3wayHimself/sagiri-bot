module.exports = {
	name: 'reloadgame',
    description: 'Reset `Playing` status.',
    cooldown: 5,
    owner_only: true,
	execute(m, bot, args) {
        bot.user.setActivity(`Do ${cfg.prefix}help | ${bot.guilds.size} servers | ${bot.users.size} users`);
        m.channel.send(`Updated.`);
	},
};