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

exports.run = (m, bot, args) => {
    if(m.author.id !== cfg.oid) return;
    try {
        var a = m.content.split(" ").slice(1)
        const code = a.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        } catch (err) {
        m.channel.send(`Error: \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};