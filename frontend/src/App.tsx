import React, { useEffect } from 'react';
import ChatApplication from './components/container/chat-application/ChatApplication';
import Container from './components/container/Container';
import Header from './components/container/header/Header';
import { getFromServer } from './utils/axios-utils';
import s from './App.module.css'

function App() {

  useEffect(()=>{
    getFromServer("").then(res=>{console.log(res)});
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
