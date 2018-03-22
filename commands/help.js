const fs = require(`fs`);
const cfg = require('../config.json');
var helpmsg;
fs.readFile("helpmsg.txt", "utf8", function(err, data) {
    if (err) throw err;
    helpmsg = data;    
});
module.exports = {
	name: 'help',
    description: 'Get overall help, or help with a command.',
    cooldown: 5,
    usage: '[command name]',
	execute(m, bot, args) {
        const commands = bot.cmds;
        if (!args) {
            const helparray = helpmsg.split('---NEWMSG---');
            for (i = 0; i < helparray.length; i++) {
                m.author.send(helparray[i]);
            }
        } else {
            if (!commands.has(args[0])) {
                m.reply('that\'s not a valid command!');
                return;
            }
            var data = [];
            const command = commands.get(args[0]);
            data.push(`**Name:** ${command.name}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.usage) data.push(`**Usage:** ${cfg.prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
            m.channel.send(data.join('\n'));
        }
	},
};
