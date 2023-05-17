import React from 'react';
import './weapongrid.css';



const WeaponGrid = ({ weapons, openModal }) => {
  return (
    <div className="grid">
      {weapons.map((weapon) => (
        <div key={weapon.name} className="weapon">
          <img
            src={`${weapon.name}.png`}
            alt={weapon.name}
            onClick={() => openModal(weapon.name)}
          />
          {/* <div className="weapon-name">{weapon.name}</div> */}
        </div>
      ))}
    </div>
  );
};

export default WeaponGrid;
