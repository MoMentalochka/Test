import React from 'react';
import Routes  from './routes/routes';
import SocketCreator from './routes/webSocket/socket';

export const socket = new SocketCreator('http://localhost:5000')

const App = () => {
    return (
     <Routes/>
    )
}

export default App
