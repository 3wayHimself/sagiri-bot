const cfg = require(`../config.json`)

exports.run = (m, bot, args) => {
    m.author.send(`
    **Commands *DO NOT* work in DMs.**
    **Avabile commands:**
    
        **${cfg.prefix}8ball** - Ask a question and I will reply Yes/No/Maybe. *Syntax: ${cfg.prefix}8ball Question Goes Here*
        **${cfg.prefix}cat** - I will post a random cat picture from random.cat.
        **${cfg.prefix}github** - Get a link to my GitHub repository.
        **${cfg.prefix}googl** - Shorten a link using goo.gl. *Syntax: ${cfg.prefix}googl LinkHere*
        **${cfg.prefix}hate** - Hate someone. *Syntax: ${cfg.prefix}hate MentionAnUser*
        **${cfg.prefix}help** - Show help message.
        **${cfg.prefix}invite** - Invite me to your server.
        **${cfg.prefix}kick** - Kick an user from a server. Requires Kick Members permission. *Syntax: ${cfg.prefix}kick MentionAnUser Reason Goes Here*
        **${cfg.prefix}kill** - Kill someone. *Syntax: ${cfg.prefix}kill MentionAnUser*
        **${cfg.prefix}kiss** - Kiss someone. *Syntax: ${cfg.prefix}kiss MentionAnUser*
        **${cfg.prefix}love** - Love someone. *Syntax: ${cfg.prefix}love MentionAnUser*
        **${cfg.prefix}noticeme** - I will mention you.
        **${cfg.prefix}ping** - Check my latency.
        **${cfg.prefix}site** - Get a link to my website.
        **${cfg.prefix}stats** - Check my stats.
        **${cfg.prefix}suicide** - Suicide.
    `)
};