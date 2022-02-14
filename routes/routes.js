const routes = require("express").Router();
const chooseDateRouter = require("./chooseDate.route");
const chooseTimeRouter = require("./chooseTime.route");

routes.use('/choose-date', chooseDateRouter); 
routes.use('/choose-time', chooseTimeRouter); 

routes.get('/', (req, res) => {
  res.send('<h2> Home Page </h2>')
})

module.exports = routes;