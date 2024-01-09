import express from "express";
import useragent from "express-useragent";
import cors from "cors";
const app = express();
const port = 3000;

app.use(useragent.express());
app.use(cors());
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
