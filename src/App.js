// import logo from './logo.svg';
// import './App.css';
import Nav from './component/Nav';
// import Body from './component/Body';
import { apple } from '../src/util/constents/contextapi';
import { Provider } from 'react-redux'
import React, { useContext, useState } from 'react';
import appStore from './util/redux/appStore';
import { Outlet } from 'react-router-dom';

function App() {
  const { dataName } = useContext(apple)
  const [userName, setUserName] = useState(dataName)

  return (
    <div >
      <Provider store={appStore}>
        <apple.Provider value={{ dataName: userName, changeData: setUserName }}>
          <Nav />
          {/* <Body /> */}
          <Outlet/>
        </apple.Provider >
      </Provider>
    </div>
  );
}

export default App;
