const express = require('express');
const app = express();
const port = 8080;

app.get('/somedata', (req, res) => {
    const customers = [
        {id: 1, name: "PWA"},
        {id: 2, name: "Firebase"},
        {id: 3, name: "React"},
        {id: 4, name: "Redux"}
    ];
    // console.log(customers);
    res.json(customers);
});

app.listen(port, console.log(`Serverr running on Port: ${port}`));