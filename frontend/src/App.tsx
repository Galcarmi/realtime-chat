import React, { useEffect } from 'react';
import './App.css';
import { get } from './utils/axios-utils/axiosUtils';

function App() {

  useEffect(() => {
    get().then((res: any) => console.log(res));
  }, [])


  return (
    <div className="App">
      <div>React App</div>
    </div>
  );
}

export default App;
