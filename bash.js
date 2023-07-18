// Un prompt como output
process.stdout.write('prompt > ');
// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
const commands = require('./commands');

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt >');
}

process.stdin.on('data', function (data) {
    let info = data.toString().trim().split(' ');
    let cmd = info[0]
    let parametros = info.slice(1).join(' ')
    commands[cmd](parametros, done)
    console.log(cmd);
});

