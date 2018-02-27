exports.run = (m, bot, args) => {
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
                m.channel.send(`I can't do this. I need to be higher role than user you want to ban. You can't ban a guild owner.`);
            });
        } else m.channel.send(`I don't have permission to do it. Required permission: Ban Members.`)
    } else m.channel.send(`You don't have permission to do it. Required permission: Ban Members.`)

};