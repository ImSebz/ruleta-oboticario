import './App.css';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import Modal from 'react-modal';
import title from './assets/title.png';
import pointer from './assets/pointer.png';
import bono50 from './assets/bono_50_mil.png';
import bono50_2 from './assets/bono_50_mil_white.png';
import ramo_de_flores from './assets/ramo_de_flores.png';
import kit_de_muestras from './assets/kit_de_muestras.png';
import kit_de_muestras_2 from './assets/kit_de_muestras_white.png';
import spa_de_manos from './assets/spa_de_manos.png';

const data = [
  { option: 'spa_de_manos', image: { uri: spa_de_manos, sizeMultiplier: 1.2 }, alt: "Spa de manos" },
  { option: 'bono50', image: { uri: bono50, sizeMultiplier: 1.2 }, alt: "Bono 50 mil" },
  { option: 'kit_de_muestras_2', image: { uri: kit_de_muestras_2, sizeMultiplier: 1.2 }, alt: "Kit de Muestras", originalImage: kit_de_muestras },
  { option: 'bono50_2', image: { uri: bono50, sizeMultiplier: 1.2 }, alt: "Bono 50 mil", originalImage: bono50 },
  { option: 'ramo_de_flores', image: { uri: ramo_de_flores, sizeMultiplier: 1.2 }, alt: "Ramo de flores" },
  { option: 'bono50', image: { uri: bono50_2, sizeMultiplier: 1.2 }, alt: "Bono 50 mil" },
  { option: 'kit_de_muestras', image: { uri: kit_de_muestras, sizeMultiplier: 1.2 }, alt: "Kit de Muestras" },
  { option: 'ramo_de_flores', image: { uri: ramo_de_flores, sizeMultiplier: 1.2 }, alt: "Ramo de flores" },
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
        <div className='title'>
          <img src={title} alt="Título" />
        </div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#f8dbe0', '#d4e6c9', '#6fa487']}
          onStopSpinning={handleStopSpinning}
          outerBorderWidth={1}
          outerBorderColor="#fff"
          radiusLineWidth={0}
          fontSize={30}
          pointerProps={{
            src: pointer,
            style: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-145deg)',
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
  contentLabel="Premio Ganado"
  className="modal"
  overlayClassName="overlay"
>
  <h2 className='modal-h2'>Premio Ganado</h2>
  <img
    src={data[prizeNumber].originalImage || data[prizeNumber].image.uri}
    alt={data[prizeNumber].alt} 
    style={{ width: '100%', height: 'auto' }} 
  />
  <button onClick={closeModal}>Cerrar</button>
</Modal>
      </div>
    </>
  );
}

export default App;