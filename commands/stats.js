const Discord = require (`discord.js`);
const moment = require(`moment`);
const arrays = require(`../arrays.json`);

exports.run = (m, bot, args) => {
    var temp = moment.duration(bot.uptime);
    var uptim = temp.days()+ "d "+ temp.hours() + "h "+ temp.minutes()+"min " + temp.seconds()+"s "+temp.milliseconds() + "ms";
    var emded = new Discord.RichEmbed()
        .setAuthor(bot.user.username, ``, bot.user.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .addBlankField()
        .setColor(`#FFFFFF`)
        .addField(`Guilds:`, "```\n"+bot.guilds.size+"```", true)
        .addField(`Channels:`, "```\n"+bot.channels.size+"```", true)
        .addField(`Users:`, "```\n"+bot.users.size+"```", true)
        .addField(`Heartbeat:`, "```\n"+Math.floor(bot.ping)+"ms ```", true)
        .addField(`Uptime:`, "```\n"+uptim+"```")
        .setFooter(new Date().toUTCString())
    m.channel.send({ embed: emded })
};