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
        m.channel.send(`Ooh, thanks! :heart:`)
    }else m.channel.send(m.author.toString() + " " +arrays.love[Math.floor(Math.random() * arrays.love.length)] + " " + m.mentions.members.first())
};