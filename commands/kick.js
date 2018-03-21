module.exports = {
	name: 'kick',
    description: 'Kick an user from current server. Requires Kick Members permission.',
    cooldown: 5,
    usage: '{member}',
	execute(m, bot, args) {
        if (m.member.hasPermission(`KICK_MEMBERS`)) {
            if (m.guild.members.get(bot.user.id).hasPermission(`KICK_MEMBERS`)) {
                let member = m.mentions.members.first();
                if (!m.mentions.members.first()) {
                    m.channel.send(`You need to mention a member.`);
                    return;
                }
                if (member === m.member) {
                    m.channel.send(`You can't kick yourself.`);
                    return;
                }
                let reason = `Kicked by ${m.member.displayName} on ${new new Date().toUTCString()}`;
                member.kick(reason).then((member) => {
                    m.channel.send(`${member.displayName} has been kicked`);
                }).catch(() => {
                    m.channel.send(`I encountered the following error: ${err}.`);
                });
            } else m.channel.send(`I don't have permission to do it. Required permission: Kick Members.`);
        } else m.channel.send(`You don't have permission to do it. Required permission: Kick Members.`);
	},
};