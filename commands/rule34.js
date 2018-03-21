const booru = require('booru');

const site = 'rule34';

exports.run = (m, bot, args) => {
    booru.search(site, [args.join(' ')], {limit: 1, random: true})
    .then(booru.commonfy)
    .then(images => {
    for (let image of images) {
        m.channel.send(`Your booru will load in a few seconds, ` + m.author.toString() + `.`);
        m.channel.send({file: image.common.file_url}).catch((err) => m.channel.send(`I encountered the following error: ${err}. Please try again.`));
    }
    })
    .catch(err => {
        if (err.name === 'BooruError') {
            m.channel.send(err.message);
        } else {
            m.channel.send(err);
        }
    })
}; 

