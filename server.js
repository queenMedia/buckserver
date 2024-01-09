const express = require('express');
const useragent = require('express-useragent');
const app = express();
const port = 3000;

app.use(useragent.express());
app.get('/', (req, res) => {
    const userAgent = req.useragent;
    if (userAgent.isChrome) {
        res.sendFile(__dirname + '/download.png');
    } else if (userAgent.isEdge || userAgent.isBot) {
        console.log("A bot enterd!!!!!!");
        res.sendFile(__dirname + '/aloha.webp');
    } else {
        res.sendFile(__dirname + '/download.png');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
