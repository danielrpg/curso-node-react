const http = require('http');

http.createServer((req, res) => {
    let result = {
        name: 'Chris',
        age: 28,
        url: req.url
    }
    res.write(JSON.stringify(result));
    res.end();
})
.listen(3000);

console.log('listen port 3000');