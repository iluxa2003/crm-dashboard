import React from 'react';
import LeftMenu from './components/leftMenu/leftMenu';
import './App.css';
import MiddleList from './components/middleList/MiddleList';

function App() {
  return (
    <div>
      <main className="container">
        <LeftMenu />
        <MiddleList />
      </main>
    </div>
  );
}

export default App;
