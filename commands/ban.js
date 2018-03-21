module.exports = {
	name: 'ban',
    description: 'Ban an user from current server. Requires Ban Members permission.',
    cooldown: 5,
    usage: '{member}',
	execute(m, bot, args) {
        if (m.member.hasPermission(`BAN_MEMBERS`)) {
            if (m.guild.members.get(bot.user.id).hasPermission(`BAN_MEMBERS`)) {
                let member = m.mentions.members.first();
                if (!m.mentions.members.first()) {
                    m.channel.send(`You need to mention a member.`);
                    return;
                }
                if (member === m.member) {
                    m.channel.send(`You can't ban yourself.`)
                    return;
                }
                let reason = `Banned by ${m.member.displayName} on ${new new Date().toUTCString()}`
                member.ban(reason).then((member) => {
                    m.channel.send(`${member.displayName} has been banned`);
                }).catch(() => {
                    m.channel.send(`I encountered the following error: ${err}.`);
                });
            } else m.channel.send(`I don't have permission to do it. Required permission: Ban Members.`);
        } else m.channel.send(`You don't have permission to do it. Required permission: Ban Members.`);
	},
};