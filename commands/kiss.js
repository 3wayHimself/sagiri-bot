const arrays = require(`../arrays.json`);
module.exports = {
	name: 'kiss',
    description: 'Kiss someone.',
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
            m.channel.send(`I'm... I'm not interested in you, sorry :blush:`);
        } else m.channel.send(m.author.toString() +" "+  arrays.kiss[Math.floor(Math.random() * arrays.kiss.length)]+ " " + m.mentions.members.first());
	},
};