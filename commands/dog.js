module.exports = {
	name: 'dog',
    description: 'Random dog image from `random.dog`.',
    cooldown: 10,
	execute(m, bot, args) {
		const request = require (`request`);
        request({
            url: `http://random.dog/woof`,
        }, function (error, response, body) {
            if (error) {
                m.channel.send(`I encountered the following error: ${error}. Please try again. If the problem persists, report it to my owner.`);
            } else {
                m.channel.send(`Your dog will load in a few seconds, ` + m.author.toString() + `.` )
                m.channel.send({file: `http://random.dog/${body}`}).catch(err => {
                    m.channel.send(`I encountered the following error: ${err}. Please try again. If the problem persists, report it to my owner.`);
                });
            }
        })
	},
};