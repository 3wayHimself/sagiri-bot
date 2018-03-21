const arrays = require(`../arrays.json`);
module.exports = {
	name: 'love',
    description: 'Love someone.',
    cooldown: 5,
    usage: '{member}',
	execute(m, bot, args) {
        if (!m.mentions.members.first()) {
            m.channel.send(`You need to mention a member`);
        } else
        if (m.mentions.members.first().id === m.author.id){
            m.channel.send(`You can't do this action on yourself`);
        } else 
        if (m.mentions.members.first().id === cfg.botid){
            m.channel.send(`Ooh, thanks! :heart:`);
        } else m.channel.send(m.author.toString() + " " +arrays.love[Math.floor(Math.random() * arrays.love.length)] + " " + m.mentions.members.first());
	},
};