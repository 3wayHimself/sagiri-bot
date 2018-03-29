const arrays = require(`../arrays.json`);
module.exports = {
    name: 'httpcat',
    args: true,
    description: 'HTTP cat image from `http.cat`.',
    cooldown: 10,
	execute(m, bot, args) {
        if (arrays.httpcat.includes(args[0])) {
            m.channel.send(`Your cat will load in a few seconds, ` + m.author.toString() + `.` );
            m.channel.send({file: `http://http.cat/${args[0]}.jpg`}).catch(err => {
                m.channel.send(`I encountered the following error: ${err}. Please try again. If the problem persists, report it to my owner.`);
            });
        } else {
            m.channel.send(`HTTP error code not found!`);
        }
	},
};