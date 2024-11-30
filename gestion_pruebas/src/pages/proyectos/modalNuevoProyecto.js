import React from 'react';

const ModalNuevoProyecto = ({closeModal}) => {
  return (
    <div>
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Este es un Modal</h2>
          </div>
        </div>
    </div>
  );
}

export default ModalNuevoProyecto;