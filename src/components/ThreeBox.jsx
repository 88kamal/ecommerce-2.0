import React, { useContext } from 'react'
import { BsFillAirplaneEnginesFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md'
import allContext from '../context/allContext/allContext';

function ThreeBox() {
  const context = useContext(allContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 lg:py-10 mx-auto lg:max-w-5xl md:max-w-8xl">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
              <BsFillAirplaneEnginesFill size={50} className="text-green-900 hover:-translate-y-1" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg lg:text-lg md:text-sm title-font font-bold mb-2" style={{color:mode==='dark'?'white':'black'}}>Free Worldwide Shipping
              </h2>
              <p className="leading-relaxed md:text-sm text-base  font-light" style={{color:mode==='dark'?'white':'black'}}>On order over $150
              </p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
              <FaWallet size={50} className="text-green-900 hover:-translate-y-1" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg lg:text-lg md:text-sm title-font font-bold mb-2" style={{color:mode==='dark'?'white':'black'}}>Money Back Guarantee
              </h2>
              <p className="leading-relaxed md:text-sm text-base  font-light" style={{color:mode==='dark'?'white':'black'}}>Cash On Delivery
              </p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
              <MdSupportAgent size={50} className="text-green-900 hover:-translate-y-1" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg lg:text-lg md:text-sm font-bold mb-2" style={{color:mode==='dark'?'white':'black'}}>Best Online Support
              </h2>
              <p className="leading-relaxed md:text-sm text-base  font-light" style={{color:mode==='dark'?'white':'black'}}>Call us 24/7 at 123-456-789
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeBox