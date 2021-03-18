import React, { useEffect } from 'react';
import ChatApplication from './components/chat-application/ChatApplication';
import Container from './components/utils/container/Container';
import Header from './components/header/Header';
import { getFromServer } from './utils/axios-utils';
import s from './App.module.css'
import { io } from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";

function App() {

  useEffect(()=>{
    getFromServer("").then(res=>{console.log(res)});
    const socket = io(ENDPOINT);
    socket.on("global", (data:any) => {
      console.log(data);
    });
  },[])

  return (
    <div className={s.root}>
    <Header name="" height={50}/>
    <Container>
      <ChatApplication/>
    </Container>
    </div>
  );
}

export default App;
