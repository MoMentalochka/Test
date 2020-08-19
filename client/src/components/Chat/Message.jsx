import React from 'react';
import './Message.css'

const Message = (props) => {
  return  (
    <div className={`message  ${props.message.self ? ' self' : null }`}>
            <div className={'avatar'}>{props.message.name.slice(0,2).toUpperCase()  }</div>
            <div className={`message_text${props.message.self ? '_self' : '' }`}> {`${props.message.text}`}</div>
      {/*<span>{props.message.time}</span>*/}
    </div>
  )
}

export default Message