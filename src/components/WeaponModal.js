import React from 'react';
import Modal from 'react-modal';

const WeaponModal = ({
  isOpen,
  onRequestClose,
  currentWeapon,
  weapons,
  selectedSkin,
  handleSkinSelect,
}) => {
  const weapon = weapons.find((w) => w.name === currentWeapon);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Skin Modal">
      <h2>Select a Skin for {currentWeapon}</h2>
      {weapon && (
        <div>
          {weapon.skins.map((skin) => (
            <div key={skin.id}>
              <input
                type="radio"
                name={`${weapon.name}-skins`}
                id={`${weapon.name}-skin-${skin.id}`}
                checked={selectedSkin && selectedSkin.id === skin.id}
                onChange={() => handleSkinSelect(weapon.name, skin)}
              />
              <label htmlFor={`${weapon.name}-skin-${skin.id}`}>{skin.name}</label>
            </div>
          ))}
        </div>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default WeaponModal;
