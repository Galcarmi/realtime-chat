import React, { useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import FriendsPanel from './components/friends-panel/FriendsPanel';
import { serverGet } from './utils/axios-utils/axiosUtils';
function App() {

  useEffect(() => {
    serverGet("").then((res: any) => console.log(res));
  }, [])


  return (
    <div className="App">
      <FriendsPanel></FriendsPanel>
      <Chat></Chat>
    </div>
  );
}

export default App;
