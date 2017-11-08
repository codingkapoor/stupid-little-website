var koa = require("koa");
var app = module.exports = new koa();

var html =
  `<html>
    <head>
      <meta charset="UTF-8" />
      <title>A small test page</title>
      <script src="//localhost:9091"></script>
    </head>
    <body>
      <div>Page loaded at: <span id="demo"></span></div>
    </body>
    <script language="javascript">
      document.getElementById('demo').innerHTML = new Date();
    </script>
   </html>`;

app.use(function *() {
  console.log("A request received!");

  if(this.request.path === '/client') {
    this.body = html;
    return;
  }

  this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
if(!module.parent){ app.listen(port); }
console.log("Application started...");
