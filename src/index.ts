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
    
    if (userAgent.isChrome) {
        imagePath = path.join(__dirname, 'assets/assets', 'download.png');
    } else if (userAgent.isEdge || userAgent.isBot) {
        console.log("A bot entered!!!!!!");
        imagePath = path.join(__dirname, 'assets/assets', 'aloha.webp');
    } else {
        imagePath = path.join(__dirname, 'assets/assets', 'download.png');
    }
    console.log(imagePath);
    
    res.sendFile(imagePath);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
