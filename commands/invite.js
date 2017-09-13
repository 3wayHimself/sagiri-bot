const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.author.send(`**Invite me to a server:** https://discordapp.com/oauth2/authorize?client_id=`+ cfg.botid +`&scope=bot&permissions=` + cfg.perms + `\nAlso here's a link to my server: https://discord.gg/` + cfg.invite);
    m.channel.send(`Sure, `+ m.author.toString() +`. I've DM'ed you both invite links`);
};