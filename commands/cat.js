const request = require (`request`);

exports.run = (m, bot, args) => {
    request({
        url: `http://random.cat/meow.php`,
        json: true
    }, function (error, response, body) {
        m.channel.send(`Your cat will load in a few seconds, ` + m.author.toString() + `.` )
        m.channel.send(body)
    })
};
