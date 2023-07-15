import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext'

function TwoBox() {
    const context = useContext(allContext)
    const {mode} = context
  return (
    <div>
        <section className={`body-font mb-10`}  style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#f1f2f6', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-5  py-10 lg:py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full">
                <img className='rounded-xl' src="img/S1.png" alt="" />
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full ">
              <img className='rounded-xl' src="img/S2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TwoBox