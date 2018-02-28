const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    if(m.author.id != cfg.oid) return;
    bot.user.setActivity(`Do ${cfg.prefix}help | ${bot.guilds.size} servers | ${bot.users.size} users`);
    m.channel.send(`Updated.`)
};
