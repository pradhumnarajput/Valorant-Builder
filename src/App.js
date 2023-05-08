import './App.css';
import VP_data from './components/VP_data';
import Guns_grid from './components/Guns_grid';
import Navbar from './components/Navbar';
import background from './images/background.jpeg';
import React from 'react';

function App() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}>


        <Navbar />
        <div className="content">
          <Guns_grid />
          <VP_data />
        </div>

      </div>
    </>
  );
}

export default App;
