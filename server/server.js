const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.sendFile('/index.html');
// })

// console.log(__dirname+ '/../public');
// console.log(publicPath);


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
