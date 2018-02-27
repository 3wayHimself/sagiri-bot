const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send(`View my repository here: ${cfg.repo}`)
};