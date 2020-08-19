import React, {useEffect} from 'react';
import {socket} from '../../App';
import Message from './Message';

const styles = {
  messages: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: '400px',

  },
  messageArea : {
    display: 'flex',
    height: '400px',
    justifyContent: 'start',
    padding: '20px 20px 0 20px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    borderTop: '2px solid #7e7e80',
  },
  messageForm: {
    padding: '0 20px 10px',
    borderTop: "2px solid #7e7e80",

  },
}
const MessageArea = (props) => {
  const Messages = props.messages
    ? props.messages.map( (m, index) => (
      <li key={index}>
        <Message message = {m}/>
      </li>
    ))
    : []
  /**
   *  Обновляем положение скролла до уровня последнего сообщения
   */

  useEffect(()=>{
    let $messageArea = document.getElementById('messageArea')
    $messageArea.scrollTop = $messageArea.scrollHeight +100
  })

  const handleSubmit = (event) => {
    let target = (document.getElementById('textarea'))
    event.preventDefault();
    socket.sendMessage('newMessage', {text: target.value})
    target.value = ''
  }

  return (
    <div style={styles.messages}>
      <h3> ChatRoom</h3>
      <div id="messageArea" style={styles.messageArea}>
        <ul id="messages" style={styles.messages}>
          {Messages}
        </ul>
      </div>
      <form id="form" style={styles.messageForm} onSubmit={handleSubmit}>
        <div className="input-field">
          <input id="textarea" type="text" autoFocus={true}/>
          <label htmlFor="textarea"> Введите сообщение </label>
        </div>
        <button className="btn waves-effect light-blue accent-3" type="submit" name="action" > Отправить</button>
      </form>
    </div>
  )
}
export default MessageArea