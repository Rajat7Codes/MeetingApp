const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

// BodyParsing Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//  Connect all our routes to our application
app.use('/', routes);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});