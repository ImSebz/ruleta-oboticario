import './App.css';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import Modal from 'react-modal';

const data = [
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5' },
  { option: '6' },
  { option: '7' },
  { option: '8' },
];

Modal.setAppElement('#root');

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#BBB', '#FF6B00']}
          onStopSpinning={handleStopSpinning}
          pointerProps={{
            style: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-189deg)',
              width: '10%',
            },
          }}
        />
        <button onClick={handleSpinClick} disabled={mustSpin}>
          Girar la Ruleta
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Número Generado"
          className="modal"
          overlayClassName="overlay"
        >
          <h2 className='modal-h2'>Número Generado</h2>
          <p className='modal-number'>{data[prizeNumber].option}</p>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      </div>
    </>
  );
}

export default App;