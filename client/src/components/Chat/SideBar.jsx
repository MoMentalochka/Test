import React from 'react';
import './SideBar.css'


const SideBar = (props) => {
  const Users = props.users
    ? props.users.map((u, index) => <li key={index} className={props.id === u.id ? 'self_user' :''}>{u.name}</li>)
    : []


  return (
    <div className={'sideBar'}>
      <h3> Online users </h3>
      <ul id="onlineUsers">
        {
          (Users.length)
            ? Users
            : <li>Empty</li>
        }
      </ul>
    </div>
  )
}
export default SideBar