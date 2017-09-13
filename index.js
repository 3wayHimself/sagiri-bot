const Discord = require (`discord.js`);
const fs = require(`fs`);

const bot = new Discord.Client();
const cfg = require(`./config.json`);
const arrays = require(`./arrays.json`)

function log(m, c) {
    console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called ${c} Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
};

bot.on(`ready`,() =>{
    var date = new Date().toUTCString()
    console.log(`[${date}] Ready`);
    bot.user.setPresence({ game: { name: `Do ${cfg.prefix}help | ${bot.guilds.size} guilds | ${bot.users.size} users`  , type: 0 } });
});


bot.on(`message`, (m)=> {
    if (m.author.bot || !m.content.startsWith(cfg.prefix)) return;
    var args = m.content.slice(cfg.prefix.length).trim().split(/ +/g);
    if (!args[0]) return;
    if (!m.guild){
        m.channel.send(`Commands do not work in DMs. Sorry.`)
        return;
    };
    var cmd = false;
    for(var x in arrays.commands) {
        if(arrays.commands[x] == args[0].toLowerCase()) {
            let commandFile = require(`./commands/${args[0].toLowerCase()}.js`);
            log(m, args[0])
            commandFile.run(m, bot, args);
            cmd = true;
        } 
    }
    if (cmd === false) m.channel.send(`Command does not exist.`);
});


bot.login(cfg.token)