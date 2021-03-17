import React, { useEffect } from 'react';
import ChatApplication from './components/chat-application/ChatApplication';
import Container from './components/utils/container/Container';
import Header from './components/header/Header';
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
