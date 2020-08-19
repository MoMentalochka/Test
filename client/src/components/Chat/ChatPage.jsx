import React from 'react';
import {connect} from 'react-redux';
import { addNewMessage } from '../../redux/actions'


import SideBar from './SideBar';
import MessageArea from './MessageArea';

const styles = {
  chatRoom : {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  height: '85vh',
  border: '2px solid #7e7e80',
  borderTop: 'none',
},
}
const ChatPage = (props) => {
  return(
    <div>
      <div id="chatPage" style={styles.chatRoom}>
        <SideBar users = {props.users} id = {props.id}/>
        <MessageArea messages = {props.messages}/>
      </div>
      <div>
        <h5>Ссылка на комнату</h5>
        <h4> <i> {`localhost:3000/id${props.roomId}`}</i></h4 >
      </div>

    </div>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users.users,
    messages: state.messages.messages,
    id: state.users.id,
    roomId: state.users.roomId
  }
}
const mapDispatchToProps = {
  addNewMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatPage)