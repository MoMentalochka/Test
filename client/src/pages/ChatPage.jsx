import React from 'react';
import {connect} from 'react-redux';
import styles from './css_modules/ChatRoom.module.css'
import { addNewMessage } from '../redux/actions'
import { socket } from '../App';


const ChatPage = (props) => {

  const Users = props.users
    ? props.users.map((u, index) => <li key={index}>{u}</li>)
    : []
  const Messages = props.messages
    ? props.messages.map( (m, index) => (
      <li key={index}>
        <div className={styles.message}>
          <span>
            <strong>{m.name + ': '}</strong>
            <b>{`${m.text}`}</b>
          </span>
          <span>{m.time}</span>
        </div>
      </li>
    ))
    : []
const handleSubmit = (event) => {
  let target = (document.getElementById('textarea'))
  event.preventDefault();
  socket.sendMessage('newMessage', {text: target.value})
  target.value = ''
}



  return(
    <div>
      <div id="chatPage" className={styles.chatRoom}>
        <div className={styles.sidebar}>
          <h3> Online users </h3>
          <ul id="onlineUsers">
            {
              (Users.length)
              ? Users
              : <li>Empty</li>
            }
          </ul>
        </div>
        <div className={styles.messages}>
          <h3> ChatRoom</h3>
          <div id="messageArea" className={styles.messageArea}>
            <ul id="messages">
              {Messages}
            </ul>
          </div>
          <form id="form" className={styles.messageForm} onSubmit={handleSubmit}>
            <div className="input-field">
              <textarea id="textarea" className="materialize-textarea" autoFocus={true}/>
              <label htmlFor="textarea"> Введите сообщение </label>
            </div>
            <button className="btn waves-effect light-blue accent-3" type="submit" name="action" > Отправить</button>
          </form>
        </div>
      </div>
      <div>
        <h5>Ссылка на комнату</h5>
        <h4> <i>{`localhost:3000/id${props.id}`}</i></h4 >
      </div>

    </div>
  )

}
const mapStateToProps = state => {
  return {
    users: state.users.users,
    messages: state.messages.messages,
    id: state.users.id
  }
}
const mapDispatchToProps = {
  addNewMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatPage)