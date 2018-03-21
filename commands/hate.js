module.exports = {
	name: 'hate',
    description: 'Hate someone.',
    usage: '{member}',
    cooldown: 30,
	args: true,
	execute(m, bot, args) {
        const arrays = require(`../arrays.json`);
		if (!m.mentions.members.first()) {
            m.channel.send(`You need to mention a member`);
        } else
        if (m.mentions.members.first().id === m.author.id){
            m.channel.send(`You can't do this action on yourself`);
        } else 
        if (m.mentions.members.first().id === cfg.botid){
            m.channel.send(`Why do you hate me? :cry:`);
        } else m.channel.send(m.author.toString() +" "+  arrays.hate[Math.floor(Math.random() * arrays.hate.length)]+ " " + m.mentions.members.first());
	},
};