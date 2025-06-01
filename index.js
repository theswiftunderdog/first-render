import express from "express";


const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("if you open this, YOU ARE GAY!");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});