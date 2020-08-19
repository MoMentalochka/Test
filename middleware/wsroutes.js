const socket = require('socket.io')
const moment = require('moment')
const wsUsers = module.exports = {}

/**
 * Модуль обработки событий WS
 */
module.exports.websockified = server => {

  const io = socket.listen(server)

  io.on('connection', (socket) => {
    let {name, id} = socket.handshake.query
    if (id === 'new'){
      id = socket.id;
    }
    if (wsUsers[id] === undefined){
      wsUsers[id] = []
    }
    console.log(`New user ${name} connected`);
    socket.join(id)
    socket.emit('initUserInfo', {roomId: id, id: socket.id, users:wsUsers[id]})
    wsUsers[id].push({name, id: socket.id})
    console.log(`User ${name} connected to ${id} room`);
    io.to(id).emit('newUser', {name, id :socket.id})
    socket.on('newMessage', function(socket){
      if (socket.text) {
        let time = moment().format(' h:mm:ss a');
        io.to(id).emit('chatMessage',{...socket, name, time })
      }
    })

    socket.on('disconnect', function(){
      wsUsers[id] = wsUsers[id].filter(u => u.id !== socket.id)
      console.log(`User with id: ${socket.id} disconnected`)
      io.to(id).emit('disconnected', wsUsers[id])

    })

  })
}