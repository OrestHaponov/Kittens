const express = require('express');
const app = express();
const path = require('path'); 
const request = require('request');
const port = 3000;

const DIST_DIR = path.join(__dirname, '../dist');

app.use(express.static(DIST_DIR));
app.get('/getCat', (req, res) => {
    request('https://api.thecatapi.com/v1/images/search', 
    function (error, response, body){
        if(!error && response.statusCode == 200) {
            let parsedBody = JSON.parse(body);
            res.send({parsedBody});
        }else if(error){
            res.send('Something broke!')
        }
    })
})

app.listen(port, () => {
 console.log(`App listening on port: ${port}`);
});