const request = require('request')
const fs = require('fs');

module.exports = {
    pwd: function (args, done) {
        let path = process.cwd()
        done(path);
    },

    date: function (args, done) {
        let date = Date()
        done(date)
    },

    ls: function (args, done) {
        let result = ''
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
            result += file.toString() + '\n'
            });
            done(result)
        });
    },

    echo: function (args, done) {
        done(args)
    },

    /* echo: function (parametros) {
        let palabras = '';
        palabras += parametros;
        process.stdout.write(palabras + '\n');
        process.stdout.write('prompt > ');
    }, */

    cat: function (args, done) {
        fs.readFile(args, 'utf8', (err, data) => {
            if (err) throw err
            done(data)
        });
    },

    head: function (args, done) {
        fs.readFile(args, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let text = data;
            let slicedText = text.split('\n').slice(0, 10).join('\n');
            done(slicedText)
        });
    },

    tail: function (args, done) {
        fs.readFile(args, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let text = data;
            let slicedText = text.split('\n').slice(-10).join('\n');
            done(slicedText)
        });
    },

    sort: function (args, done) {
        fs.readFile(args, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let lines = data.split('\n');
            let sortedLines = lines.sort();
            let joined = sortedLines.join('\n');
            done(joined)
        });
    },

    wc: function (args, done) {
        fs.readFile(args, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let lines = data.split('\n');
            done(lines.length);
        });
    },
    uniq: function () { 
    },

    curl: function (args, done) {
        request(args , function (err, res, body) {
                done(body);
        })
    }
    
};
