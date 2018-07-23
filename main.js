const express = require("express"),
    cookieSession = require('cookie-session'),
    cors = require("cors"),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//app.use('/static/', express.static('public/website/'));
app.use('/node_modules', express.static('node_modules'));
app.use('/', require("./routes/index.js"));
/* serves main page */
// app.get("/", (req, res) => {
//     res.sendfile('index.html')
// });
// app.use((req, res, next) => {
//     let error404 = new Error('Route Not Found');
//     error404.status = 404;
//     next(error404);
// });

app.listen(port, () => {
    console.log("Listening on " + port);
});
