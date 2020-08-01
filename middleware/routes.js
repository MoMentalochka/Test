const wsUsers = require("./wsroutes");

/**
 * Обработчик первичного запроса авторизаци
 */
module.exports.routes = (app) => {
  app.post('/login', function (req, res) {
    if (req.body){
      let {name, id} = req.body
      if((id === "new" || wsUsers[id].indexOf(name) === -1) && name) {
        res.status(200).send({result: true, message: "authentication succeeded"})
      }
      else {
          res.status(401).send({result: false, message: "name allready in use"})
        }
    }
  })
}
