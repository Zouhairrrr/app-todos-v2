let fs = require('fs');
let path = require('path');
const { STATIC_EXTENTION } = require('../configs/config');

const ReadStaticFiles = (req, res) => {
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = '../public/index.html';
    } else if (filePath == './app') {
        filePath = '../public/project.html'
    }else{
        filePath = '../public/404.html';
    }
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = STATIC_EXTENTION[extname] || 'application/octet-stream';
    fs.readFile(path.join(__dirname, filePath), (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

}
module.exports = ReadStaticFiles;
