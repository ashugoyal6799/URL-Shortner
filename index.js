const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const urlShortnerRouter = require("./routes/urlShortnerRouter");

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
  //res.send(req.body.inputField);
  res.redirect(req.body.inputField)
})
app.get("/ashu", (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(fullUrl);
});
// app.get("/s/:base62Code", (req, res, next) => {
//   //console.log(req.body);
//   res.send("You got url");
//   //res.redirect(req.body.url);
//   //res.redirect("/");
// });

app.get("/s/:base62Code", urlShortnerRouter);

app.get("/:urlshortner", urlShortnerRouter);
// app.get("/urlshortner", (req,res,next) => {
//   res.send("Hii");
// });


//app.get("/s/:base62Code", proxy("http://google.com"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
