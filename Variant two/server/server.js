const express = require('express');
const app = express();
const path = require('path'); 
const port = 3000;
const fetch = require('node-fetch');
const DIST_DIR = path.join(__dirname, '../dist');

app.use(express.static(DIST_DIR));

app.get('/getCat', (req, res) => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
            if(res.statusCode == 200){
                data.map((catUrl) => {
                    res.send(catUrl.url);
                 })
            }else{
                let err = new Error(res.statusText)
                res.send(err);
            }
    })
})
app.listen(port, () => {
 console.log(`App listening on port: ${port}`);
});