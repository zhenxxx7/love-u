import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import Modal from './component/modal';
import Snowfall from 'react-snowfall';
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
    <div className="h-screen flex flex-col items-center justify-center font-inte bg-[#FFD4B2] dark:bg-[#4b3f35]">
      {/* <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </button> */}
      <DarkThemeToggle />
      <div className="items-center-center">
        <h1 className="text-4xl font-bold text-primary dark:text-[#a5a0a0]">
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

          <button id='no' className="bg-color1 rounded-full px-12 py-2 mt-4 overflow-hidden"
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
