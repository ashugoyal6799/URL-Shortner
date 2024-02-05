const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const urlShortnerRouter = require("./routes/urlShortnerRouter");
const originalUrlRouter = require("./routes/originalUrlRouter");

const app = express();
const port = 3000;

//app.set('views', path.join(__dirname, 'views'))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/form1',(req,res) => {
  res.render('home');
})

app.post('/submit',(req,res) => {
  res.redirect(req.body.inputField)
})
app.get("/ashu", (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(fullUrl);
});


app.use("/s", originalUrlRouter);

app.use("/:urlshortner", urlShortnerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
