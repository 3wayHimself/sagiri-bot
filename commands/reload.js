const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    if (m.author.id == cfg.oid){
        if(!args || args.size < 2) return m.channel.send(`Must provide a command name to reload.`);
        if (args[1] === `arrays`) {
            delete require.cache[require.resolve(`../arrays.json`)];
            m.channel.send(`Arrays have been reloaded`);
        } else {
        delete require.cache[require.resolve(`./${args[1]}.js`)];
        m.channel.send(`The command \`${args[1]}\` has been reloaded`);
        }
    } else m.channel.send(`Command does not exist.`)
  };