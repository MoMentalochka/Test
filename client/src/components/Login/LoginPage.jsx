import React from 'react';
import {connect} from 'react-redux';
import {authRequest} from '../../redux/actions';
import { useParams }  from 'react-router-dom';


const LoginPage = (props) => {
  let {id = 'new'} = useParams()
  const handleSubmit = (event) =>{
    event.preventDefault();
    let value = (document.getElementById('login')).value
    props.authRequest({name: value, id: id})
  }

  return  (
    <div id="loginPage" className="container">

      <h1>Login Page</h1>
      <form id="loginForm" onSubmit={handleSubmit} >

        <div className="input-field">
          <input id="login" type="text" autoFocus={true}/>
            <label htmlFor="login">Enter login</label>
        </div>

        <button className="btn waves-effect light-blue accent-3" type="submit">Войти</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  authRequest
}

export default connect(null,mapDispatchToProps)(LoginPage)
