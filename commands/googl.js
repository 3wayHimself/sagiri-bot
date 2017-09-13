const googl = require(`node-googl`);
const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    if (args[1]){
        googl.shorten(args[1], cfg.apigoogl, function(err, shortenedUrl) {
            if (err) {throw err;}
            m.channel.send(`Your shortened link: ${shortenedUrl}`)
        });
    }
    else m.channel.send(`Please provide a link ;-;`);
};