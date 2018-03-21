const request = require (`request`);
const Imgflipper = require("imgflipper");
const cfg = require(`../config.json`);
module.exports = {
	name: 'spongemock',
    description: 'Make a Mocking Spongebob meme out of some text.',
    cooldown: 10,
	execute(m, bot, args) {
        var text = args.join(' ');
        var imgflipper = new Imgflipper(cfg.imgflip_login, cfg.imgflip_pass);
        m.channel.send(`Your meme will load in a few seconds, ` + m.author.toString() + `.` )
        imgflipper.generateMeme(102156234, "", text, function (err, url) {
            m.channel.send({"file": url});
        });
	},
};