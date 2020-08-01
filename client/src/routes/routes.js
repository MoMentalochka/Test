import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import ChatPage from '../pages/ChatPage';
import { connect } from 'react-redux';

const Routes = (props) => {
  /**
   * Внутренний роутер приложения, проверяет аутентефикацию пользователя, выдавая чат или страницу логина
   */


  if (props.isAuth) {
    return(
      <Switch>
        <Route path="/" exact>
          <ChatPage />
        </Route>
        <Redirect to="/"/>
      </Switch>
    )
  }
    return (
      <Switch>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/id:id"  >
          <LoginPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    )
}

const mapStateToProps = (state) => {
  return state.auth
}
export default connect(mapStateToProps, null)(Routes)