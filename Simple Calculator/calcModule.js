exports.calc = function (req, res, vals) {
    var operation = vals.operation;
    var result = 0;
    console.log(operation + " first --" + vals.first + "second" + vals.second);
    if (operation === "add") {
      result = parseInt(vals.first) + parseInt(vals.second);
      console.log(result);
    } else if (operation === "subtract") {
      result = parseInt(vals.first) - parseInt(vals.second);
    } else if (operation === "multiply") {
      result = parseInt(vals.first) * parseInt(vals.second);
    } else {
      result = parseInt(vals.first) / parseInt(vals.second);
    }
    console.log(result);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"/>
    <title>Calculator Web Site</title>
    <link href="css/style.css" type="text/css" rel="stylesheet"/>
    </head>
    <body>
    <h1>The Answer is:${String(result)}
    </h1>
    </body>
    </html>
    `)
    return res.end();
  };