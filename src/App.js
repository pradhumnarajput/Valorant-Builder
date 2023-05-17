import React, { useState } from 'react';
import './App.css';
import VP_data from './components/VP_data';
import Guns_grid from './components/Guns_grid';
import Navbar from './components/Navbar';
import background from './images/background.jpeg';
import WeaponModal from './components/WeaponModal';
import WeaponGrid from './components/WeaponGrid'
// import React from 'react';

const weapons = [
  {
    name: 'classic',
    skins: [
      { id: 1, name: 'Skin 1', image: 'pistol-skin1.jpg' },
      { id: 2, name: 'Skin 2', image: 'pistol-skin2.jpg' },
    ],
  },
  {
    name: 'stinger',
    skins: [
      { id: 1, name: 'Skin 1', image: 'smg-skin1.jpg' },
      { id: 2, name: 'Skin 2', image: 'smg-skin2.jpg' },
    ],
  },
  {
    name: 'bulldog',
    skins: [
      { id: 1, name: 'Skin 1', image: 'sniper-skin1.jpg' },
      { id: 2, name: 'Skin 2', image: 'sniper-skin2.jpg' },
    ],
  },
];


const App = () => {

  const [selectedSkins, setSelectedSkins] = useState({
    pistol: null,
    smg: null,
    sniper: null,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentWeapon, setCurrentWeapon] = useState('');

  const handleSkinSelect = (weaponName, skin) => {
    setSelectedSkins((prevSelectedSkins) => ({
      ...prevSelectedSkins,
      [weaponName]: skin,
    }));
    setModalIsOpen(false);
  };

  const openModal = (weaponName) => {
    setCurrentWeapon(weaponName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          {/* <Guns_grid weapons={weapons} 
            selectedSkins={selectedSkins} 
            openModal={openModal} /> */}

          <WeaponGrid weapons={weapons}
            selectedSkins={selectedSkins}
            openModal={openModal} />
          {/* <WeaponModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            currentWeapon={currentWeapon}
            weapons={weapons}
            selectedSkin={selectedSkins[currentWeapon]}
            handleSkinSelect={handleSkinSelect}/> */}
          {/* <VP_data /> */}
        </div>

      </div>
    </>
  );
};

export default App;
