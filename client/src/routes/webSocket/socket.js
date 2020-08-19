import openSocket from 'socket.io-client'
import { addNewUser, initUserInfo, disconnect} from '../../redux/actions';
import {addNewMessage} from '../../redux/actions';
import {store} from '../../index'
export default class SocketCreator
{
  constructor(url) {
    this.url = url
    this.socket = undefined
  }
  /**
   * Открывает сокет-соединение, принимает на вход имя пользователя и id
   * @param name
   * @param id
   */
  Connect = (name, id) => {
    const {dispatch} = store
    this.socket = openSocket(this.url, {query: {name:name, id: id}});
    this.socket.on('chatMessage', function (msg) {
      let self
      (msg.name === name) ?  self = true : self = false
      dispatch(addNewMessage({...msg, self }))
    })

    this.socket.on('initUserInfo', function (msg) {

      dispatch(initUserInfo(msg))
    })


    this.socket.on('newUser', function (msg) {
      dispatch(addNewUser(msg))
    })

    this.socket.on('disconnected', function (users) {
      dispatch(disconnect(users))
    })
  }
  /**
   * Отправляет сообщение, принимает на вход тип сообщения и данные
   * @param type
   * @param msg
   */
  sendMessage = (type, msg) => {
    if (this.socket !== undefined) {
      this.socket.emit(type, msg)
    } else {
      throw new Error('Объект SocketWorker не инициализирован');
    }
  }
}