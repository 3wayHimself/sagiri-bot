const request = require (`request`);

exports.run = (m, bot, args) => {
    request({
        url: `http://random.dog/woof`,
        json: true
    }, function (error, response, body) {
        m.channel.send(`Your dog will load in a few seconds, ` + m.author.toString() + `.` )
        m.channel.send({file: `http://random.dog/${body}`})
    })
};
