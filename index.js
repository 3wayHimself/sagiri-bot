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

bot.on(`ready`,() =>{
    console.log(`[${new Date().toUTCString()}] Ready. User: ${bot.user.username}#${bot.user.discriminator} UID ${bot.user.id}`);
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
    if (command == cfg.prefix) {
        require(`./commands/help.js`).run(m, bot, args);
        console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called help Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
    } else if (commandList.includes(command)){
        require(`./commands/${command}.js`).run(m, bot, args);
        console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called ${command} Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
    } else {
        m.channel.send(`Command does not exist.`);
    }
});

bot.login(cfg.token);