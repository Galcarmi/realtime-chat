import React, { useEffect, useState } from 'react';
import ChatApplication from './components/chat-application/ChatApplication';
import Container from './components/utils/container/Container';
import Header from './components/header/Header';
import s from './App.module.css'
import NameInputModal from './components/utils/modal/NameInputModal';
import { socketUtil } from './utils/socket-utils';

function App() {
  const [isUsernameSetted, setIsUsernameSetted] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    const userid = sessionStorage.getItem('userid');
    if (username && userid) {
      socketUtil.createSocket(username, userid);
      setIsUsernameSetted(true);
    }
  }, [])

  const modalNameCallback = (inputContent: string) => {
    const { socketQueryOptions } = socketUtil.createSocket(inputContent);

    sessionStorage.setItem('username', socketQueryOptions.username);
    sessionStorage.setItem('userid', socketQueryOptions.id);

    setIsUsernameSetted(true);
  }

  return (
    <div className={s.root}>
      {!isUsernameSetted ?
        <NameInputModal setNameCallback={modalNameCallback}></NameInputModal>
        :
        <>
          <Header name="" height={50} />
          <Container>
            <ChatApplication />
          </Container>
        </>
      }
    </div>
  );
}

export default App;
