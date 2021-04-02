//Imported modules
const express = require('express');
const path = require('path');



//App public variables
const app = express();
const port = 9555;

//App global settings
app.set(express.static('public'));

//Route
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, ()=>{
    console.log(`Application running on port ${port}`);
});