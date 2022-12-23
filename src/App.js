import React from 'react';
import './App.css';

function App() {
  const reject = () => {
    let x = Math.floor(Math.random() * 300) + 1;
    let y = Math.floor(Math.random() * 300);
    document.getElementById('no').style
      .transform = `translate(${x}px, ${y}px)`;
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center font-inte">
      <div className="items-center-center">
        <h1 className="text-4xl font-bold text-primary">
          Hello pretty girl
        </h1>
        <h2 className="flex flex-col items-center text-2xl font-bold text-secondary">
          I love you
        </h2>
      </div>
      <div className="flex flex-col items-center text-amber-600 text-lg py-10">
        <p className="flex flex-col items-center">
          but I don't know how to tell you that I love you so much and I want to be with you forever
          <span className="flex flex-col items-center">
            Do you wanna be my girlfriend?
          </span>
        </p>
      </div>

        <div className='flex gap-2'>
          <button id='yes' className="bg-color1 rounded-full px-10 py-2 mt-4 "
          onClick={apply}
            >
            <span className="text-2xl font-bold text-white">
              Yes
            </span>
          </button>

          <button id='no' className="bg-color1 rounded-full px-12 py-2 mt-4"
            onClick={reject}
            >
            <span className="text-2xl font-bold text-white">
              No
            </span>
          </button>
        </div>
    </div>
  );
}

export default App;
