const wsUsers = require("./wsroutes");

/**
 * Обработчик первичного запроса авторизаци
 */
module.exports.routes = (app) => {

  app.post('/login', function (req, res) {

    if (req.body){
      const {name, id} = req.body
      if((id === "new" || !wsUsers[id].some(i => i.name === name)) && name) {
          res.status(200).send({result: true, message: "Authentication succeeded!"})
        }
      else{
        res.status(401).send({result: false, message: "Name already in use!"})
      }
      }
  })
}
