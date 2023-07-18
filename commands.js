const request = require('request')
const fs = require('fs');

module.exports = {
    pwd: function (params,done) {
        // let directorio = process.cwd()
        // let output = process.stdout.write(directorio);
        done(process.cwd());
        // process.stdout.write('prompt >');
    },

    date: function (params, done) {
        // console.log(new Date());
        done(Date())
        // process.stdout.write('prompt >');
    },

    ls: function (params, done) {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                // process.stdout.write(file.toString() + '\n')
                done(file);
            });
            // process.stdout.write('prompt >');
        });
    },

    echo: function (str) {
        console.log(str);
    },

    /* echo: function (parametros) {
        let palabras = '';
        palabras += parametros;
        process.stdout.write(palabras + '\n');
        process.stdout.write('prompt > ');
    }, */

    cat: function (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            console.log(data);
        });
    },

    head: function (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let text = data;
            let slicedText = text.split('\n').slice(0, 10).join('\n');
            console.log(slicedText);
        });
    },

    tail: function (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let text = data;
            let slicedText = text.split('\n').slice(-10).join('\n');
            console.log(slicedText);
        });
    },

    sort: function (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let lines = data.split('\n');
            let sortedLines = lines.sort();
            let joined = sortedLines.join('\n');
            console.log(joined);
        });
    },

    wc: function (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error en: ', err);
                return;
            }
            let lines = data.split('\n');
            console.log(lines.length);
        });
    },
    uniq: function () { 
    },

    curl: function (url) {
        request(url , function (err, res, body) {
            console.log(body);
        })
    }
    
};
