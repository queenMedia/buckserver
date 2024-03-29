import express from "express";
import useragent from "express-useragent";
import cors from "cors";
import path from 'path';
const app = express();
const port = process.env.PORT || 3030;

app.use(useragent.express());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors());
app.get('/', (req, res) => {
    const userAgent = req.useragent;
    let imagePath;
    if (userAgent.isBot) {
        console.log("A bot entered!!!!!!", userAgent);
    }
    imagePath = path.join(__dirname, 'assets/assets', 'img.simpletangoal.one.png');
    const { isBot, browser, geoIp } = userAgent
    console.log(imagePath, { isBot, geoIp, browser });
    res.sendFile(imagePath);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
