const cfg = require(`../config.json`)

exports.run = (m, bot, args) => {
    m.author.send(`
    **Commands *DO NOT* work in DMs.**
    **Avabile commands:**
    
    **Fun**:
    
     - **hate** - Hate someone. *Syntax: hate MentionAnUser*
     - **kill** - Kill someone. *Syntax: kill MentionAnUser*
     - **kiss** - Kiss someone. *Syntax: kiss MentionAnUser*
     - **love** - Love someone. *Syntax: love MentionAnUser*
     - **suicide** - Suicide.
     - **noticeme** - I will mention you.
     - **8ball** - Ask a question and I will reply Yes/No/Maybe. *Syntax: 8ball Question Goes Here*
     - **cat** - I will post a random cat picture from random.cat.
     - **dog** - I will post a random dog picture from random.dog.
    
    **Information**:
    
     - **help** - Show help message.
     - **repo** - Get a link to my repository.
     - **invite** - Invite me to your server.
     - **ping** - Check my latency.
     - **site** - Get a link to my website.
     - **stats** - Check my stats.
    
    **Utilities**:
    
     - **googl** - Shorten a link using goo.gl. *Syntax: googl LinkHere*
    
    **Memes**:
    
     - **spongemock** - Make a Mocking Spongebob meme out of some text. Uppercase only.
    
    **Moderation**:
    
     - **kick** - Kick an user from current server. Requires Kick Members permission. *Syntax: kick MentionAnUser*
     - **ban** - Ban an user from current server. Requires Ban Members permission. *Syntax: ban MentionAnUser*
    
    `);
};