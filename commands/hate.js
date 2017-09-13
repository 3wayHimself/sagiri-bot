const arrays = require(`../arrays.json`)
const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    if (!m.mentions.members.first()) {
        m.channel.send(`You need to mention a member`)
    } else
    if (m.mentions.members.first().id === m.author.id){
        m.channel.send(`You can't do this on yourself`)
    } else 
    if (m.mentions.members.first().id === cfg.botid){
        m.channel.send(`Why do you hate me? :cry:`)
    }else m.channel.send(m.author.toString() +" "+  arrays.hate[Math.floor(Math.random() * arrays.hate.length)]+ " " + m.mentions.members.first())
};