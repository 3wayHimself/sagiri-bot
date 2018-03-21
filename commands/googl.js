module.exports = {
	name: 'googl',
    description: 'Shorten a link using goo.gl.',
    usage: '{link}',
    cooldown: 30,
	args: true,
	execute(m, bot, args) {
		const googl = require(`node-googl`);
        const cfg = require(`../config.json`);
        googl.shorten(args.join(' '), cfg.apigoogl, function(err, shortenedUrl) {
            if (err) {throw err;}
            m.channel.send(`Your shortened link: ${shortenedUrl}`)
        });
	},
};