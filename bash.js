const commands = require('./commands');

function done(output) {
    process.stdout.write(output + '\n');
    process.stdout.write('\nprompt >');
}

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    let params = data.toString().trim().split(' ');
    let cmd = params[0]
    let args = params.slice(1).join(' ')
    commands[cmd](args, done)
});

