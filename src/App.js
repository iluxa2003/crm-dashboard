import React from 'react';
import LeftMenu from './components/leftMenu/leftMenu';
import './App.css';
import MiddleWindow from './components/MiddleWindow/MiddleWindow';

function App() {
  return (
    <div>
      <main className="container">
        <LeftMenu />
        <MiddleWindow />
      </main>
    </div>
  );
}

export default App;
