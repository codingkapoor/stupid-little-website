var koa = require("koa");
var app = module.exports = new koa();

app.use(function *() {
  this.body = "Koa says Hi!"
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port);
console.log("Application started...");
