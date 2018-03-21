const Discord = require (`discord.js`);
const fs = require(`fs`);

const bot = new Discord.Client();
bot.cmds = new Discord.Collection();

const cfg = require(`./config.json`);

const commandFiles = fs.readdirSync('./commands');
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.cmds.set(command.name, command);
}

const cooldowns = new Discord.Collection();

bot.on(`ready`,() =>{
    console.log(`[${new Date().toUTCString()}] Ready. User: ${bot.user.username}#${bot.user.discriminator} UID ${bot.user.id}`);
    bot.user.setActivity(`Do ${cfg.prefix}help | ${bot.guilds.size} servers | ${bot.users.size} users`);
});

bot.on(`message`, (m)=> {
    if (m.author.bot || !m.content.startsWith(cfg.prefix)) return;
    var args = m.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    if (!commandName) return;
    if (commandName == cfg.prefix) {
        bot.cmds.get('help').execute(m, bot, args)
        console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called help Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
    };
	const command = bot.cmds.get(commandName)
        || bot.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
        m.channel.send(`Command does not exist.`);
        return;
    }
    if (!m.guild){
        m.channel.send(`Commands are disabled in DMs. Sorry.`);
        return;
    };
    if (command.owner_only && (m.author.id != cfg.oid)) {
        m.channel.send(`You have no permission to run this command.`);
        return;
    }
    if (command.nsfw && !m.channel.nsfw) {
        m.channel.send(`You have to run this command in a NSFW channel.`);
        return;
    }
    if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${m.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${cfg.prefix}${command.name} ${command.usage}\``;
        }
        m.channel.send(reply);
		return;
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (!timestamps.has(m.author.id)) {
		timestamps.set(m.author.id, now);
		setTimeout(() => timestamps.delete(m.author.id), cooldownAmount);
    } else {
		const expirationTime = timestamps.get(m.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return m.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
		timestamps.set(m.author.id, now);
		setTimeout(() => timestamps.delete(m.author.id), cooldownAmount);
    }
    try {
        command.execute(m, bot, args);
        console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called ${command.name} Server: ${m.guild.name} ID: ${m.guild.id}. Channel: #${m.channel.name}.` );
	}
	catch (error) {
		console.error(error);
		m.reply('there was an error trying to execute that command!');
    }
});

bot.login(cfg.token);