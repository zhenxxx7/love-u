import React from 'react';
import Modal from './component/modal';
import './App.css';

function App() {
  const reject = () => {
    let x = Math.floor(Math.random() * 300) + 1;
    let y = Math.floor(Math.random() * 300) + 1;
    document.getElementById('no').style
      .transform = `translate(${x}px, ${y}px)`;
  }

  const accept = () => {
    setShowModal(true);
  }

  const [showModal, setShowModal] = React.useState(false);
  const handleOnClose = () => setShowModal(false);

  if (showModal) {
    document.body.style.overflow = 'hidden';
  }
  
  return (
    <div className="h-screen flex flex-col items-center justify-center font-inte bg-[#FFD4B2]">
      <div className="items-center-center">
        <h1 className="text-4xl font-bold text-primary">
          Hello pretty girl
        </h1>
        <h2 className="flex flex-col items-center text-2xl font-bold text-secondary">
          I love you
        </h2>
      </div>
      <div className="flex flex-col items-center text-amber-600 text-lg py-10">
        <p className="flex flex-col items-center text-center">
          but I don't know how to tell you that I love you so much and I want to be with you forever
          <span className="flex flex-col items-center font-bold text-[#C58940]">
            Do you wanna be my girlfriend?
          </span>
        </p>
      </div>

        <div className='flex gap-2'>
          <button id='yes' className="bg-color1 rounded-full px-10 py-2 mt-4 "
          onClick={accept}
          >
            <span className="text-2xl font-bold text-[#CEEDC7]">
              Yes
            </span>
          </button>

          <button id='no' className="bg-color1 rounded-full px-12 py-2 mt-4"
            onClick={reject}
            >
            <span className="text-2xl font-bold text-[#CEEDC7]">
              No
            </span>
          </button>
        </div>

        <Modal onClose={handleOnClose} visible={showModal} />

    </div>
  );
}

export default App;
