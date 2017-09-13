const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send(`My website: `+cfg.site)
}