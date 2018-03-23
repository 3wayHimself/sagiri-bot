const request = require (`request`);
module.exports = {
	name: 'cat',
    description: 'Random cat image from `random.cat`.',
    cooldown: 10,
	execute(m, bot, args) {
        request({
            url: `http://aws.random.cat/meow`,
            json: true
        }, function (error, response, body) {
            m.channel.send(`Your cat will load in a few seconds, ` + m.author.toString() + `.` )
            m.channel.send(body)
        })
	},
};