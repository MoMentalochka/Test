import openSocket from 'socket.io-client'
import { addNewUser, initUserInfo} from '../../redux/actions';
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
      dispatch(addNewMessage(msg))
    })

    this.socket.on('initUserInfo', function (msg) {
      dispatch(initUserInfo(msg))
    })

    this.socket.on('newUser', function (msg) {
      dispatch(addNewUser(msg))
    })
  }
  /**
   * Отправляет сообщение, принимает на вход тип сообщения и данные
   * @param type
   * @param msg
   */
  sendMessage = (type, msg) => {
    if (this.socket !== undefined) {
      this.socket.emit(type, msg);
    } else {
      throw new Error('Объект SocketWorker не инициализирован');
    }
  }
}