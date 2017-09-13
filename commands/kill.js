const arrays = require(`../arrays.json`)
const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    if (!m.mentions.members.first()) {
        m.channel.send(`You need to mention a member`)
    } else
    if (m.mentions.members.first().id === m.author.id){
        m.channel.send(m.author.toString() +" "+  arrays.suicide[Math.floor(Math.random() * arrays.suicide.length)])
    } else 
    if (m.mentions.members.first().id === cfg.botid){
        m.channel.send(`You are not a update or a crash, so you can't kill me :stuck_tongue_out:`)
    }else m.channel.send(m.author.toString() + " " +arrays.kill[Math.floor(Math.random() * arrays.kill.length)] + " " + m.mentions.members.first())
};