module.exports = {
	name: 'dollbooru',
    description: 'Random image from `dollbooru.org` with specified tags.',
    usage: '{tags separated by space}',
    cooldown: 10,
    nsfw: true,
	args: true,
	execute(m, bot, args) {
		const booru = require('booru');
        const site = 'dollbooru';
        booru.search(site, [args.join(' ')], {limit: 1, random: true})
        .then(booru.commonfy)
        .then(images => {
            for (let image of images) {
                m.channel.send(`Your booru will load in a few seconds, ` + m.author.toString() + `.`);
                m.channel.send({file: image.common.file_url}).catch((err) => m.channel.send(`I encountered the following error: ${err}. Please try again. If the problem persists, report it to my owner.`));
            }
        })
        .catch(err => {
            if (err.name === 'BooruError') {
                m.channel.send(`I encountered the following error: ${err.message}. Please try again. If the problem persists, report it to my owner.`);
            } else {
                m.channel.send(`I encountered the following error: ${err}. Please try again. If the problem persists, report it to my owner.`);
            }
        })
	},
};