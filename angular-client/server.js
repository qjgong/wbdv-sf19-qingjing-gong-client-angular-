const express = require('express');
const app = express();
app.use(express.static('./dist/angular-client'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/angular-client/index.html');
});
app.listen(process.env.PORT || 4200);
