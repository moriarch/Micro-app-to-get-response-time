const https = require('https');

const request = ({parsedUrl,callback}) => {

    const req = https.request({...parsedUrl,method: 'GET'}, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (d) => {
        //   process.stdout.write(d);
        });

        res.on('end', () => callback());
    });

    req.on('error', (error) => {
        console.log('Ошибка url')
        console.error(error);
        process.exit(0);
    });

  req.end();
}
module.exports = request