exports.run = (m, bot, args) => {
    bot.user.setActivity(`Do ${cfg.prefix}help | ${bot.guilds.size} servers | ${bot.users.size} users`);
};
