import React from "react";
import love from "../component/img/love-peach.gif";

export default function Modal({visible, onClose}) {

    if (!visible) return null;
  return (
    <div className="fixed backdrop-blur z-10  inset-0 overflow-y-auto max-sm:overflow-hidden max-sm:-mt-[14vh]">
        <div class=" block items-end justify-center min-h-screen pt-[35vh] px-4 pb-[65vh] text-center sm:block sm:p-0">
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="flex flex-col items-center">
                            <h1>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg leading-6 font-medium text-secondary" id="modal-headline">
                                        thank you for accepting me to be your girlfriend
                                    </h3>
                                    <img src={love} alt="" />
                                </div>
                                <button
                                    type="button" className="bg-color1 text-lg font-bold text-[#CEEDC7] rounded-full w-[20%] h-8"
                                    onClick={onClose}
                                >
                                    OK
                                </button>
                            </h1>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
}