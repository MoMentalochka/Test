import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from '../components/Login/LoginPage';
import ChatPage from '../components/Chat/ChatPage';
import { connect } from 'react-redux';

const Routes = (props) => {
  /**
   * Внутренний роутер приложения, проверяет аутентефикацию пользователя, выдавая чат или страницу логина
   */


  if (props.isAuth) {
    return(
      <Switch>
        <Route path="/" exact component={ChatPage}/>
        <Redirect to="/"/>
      </Switch>
    )
  }
    return (
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/id:id" component={LoginPage}/>
        <Redirect to="/"/>
      </Switch>
    )
}

const mapStateToProps = (state) => {
  return state.auth
}
export default connect(mapStateToProps, null)(Routes)