const Discord = require (`discord.js`);
const fs = require(`fs`);
const glob = require("glob");

const bot = new Discord.Client();
const cfg = require(`./config.json`);

var commandList;
glob("*.js", {cwd: 'commands'}, function (er, files) {
    for (var i = 0; i < files.length; i++) {
        files[i] = files[i].replace('.js','');
    }
    commandList = files;
})

function log(m, c) {
    console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called ${c} Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
};

bot.on(`ready`,() =>{
    console.log(`[${new Date().toUTCString()}] Ready`);
    bot.user.setActivity(`Do ${cfg.prefix}help | ${bot.guilds.size} servers | ${bot.users.size} users`);
});

bot.on(`message`, (m)=> {
    if (m.author.bot || !m.content.startsWith(cfg.prefix)) return;
    var args = m.content.slice(cfg.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    if (!command) return;
    if (!m.guild){
        m.channel.send(`Commands do not work in DMs. Sorry.`)
        return;
    };
    if (commandList.includes(command)){
        let commandFile = require(`./commands/${command}.js`);
        log(m, command);
        commandFile.run(m, bot, args);
    } else {
        m.channel.send(`Command does not exist.`);
    }
});

bot.login(cfg.token);