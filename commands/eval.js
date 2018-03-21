const Discord = require (`discord.js`);
const cfg = require(`../config.json`);
const arrays = require(`../arrays.json`);
const moment = require('moment');
const fs = require(`fs`);
const request = require (`request`);
const googl = require(`node-googl`);
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
module.exports = {
	name: 'eval',
    description: 'Check a value.',
    usage: '{value}',
    cooldown: 5,
    args: true,
    owner_only: true,
	execute(m, bot, args) {
		try {
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            m.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
            m.channel.send(`Error: \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
	},
};