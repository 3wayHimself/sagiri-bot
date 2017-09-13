const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send(`View my GitHub repository here: ${cfg.repo}`)
};