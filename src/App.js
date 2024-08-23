import React from 'react';
import LeftMenu from './components/leftMenu/leftMenu';
import './App.css';
import MiddleWindow from './components/MiddleWindow/MiddleWindow';
import { list } from './data';
function App() {
  return (
    <div>
      <main className="container">
        <LeftMenu />
        <div className="middle_cotainer">
          <h2 className="top_Username">Hello Evano,</h2>
          <MiddleWindow list={list} />
        </div>
      </main>
    </div>
  );
}

export default App;
