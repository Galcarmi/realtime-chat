import React, { useEffect } from 'react';
import ChatApplication from './components/chat-application/ChatApplication';
import Container from './components/utils/container/Container';
import Header from './components/header/Header';
import s from './App.module.css'

function App() {
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
