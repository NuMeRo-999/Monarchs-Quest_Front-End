import React from "react";

export default function ErrorModal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 animate-[slide-in-down_1s_ease-in-out] z-50 outline-none focus:outline-none">
            <div className="relative top-1/2 transform -translate-y-1/2">
              <div className="bg-[url('src/assets/images/save-slot.png')]  bg-cover w-96 h-[33rem] flex flex-col justify-center z-10 p-20 text-3xl">
                <button>
                  <span onClick={() => setShowModal(false)} className="text-3xl">🚨</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
