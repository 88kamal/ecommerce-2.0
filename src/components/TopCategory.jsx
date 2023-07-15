import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext';


function TopCategory() {
    const context = useContext(allContext);
    const { mode } = context;
    return (
        <div>
            <section className=" body-font">
                <div className="container px-5 mt-10 lg:mt-2 md:mt-0 mx-auto lg:mb-10 md:mb-0 mb-5">
                    <h1 className=' text-center lg:text-3xl md:text-xl text-2xl font-bold mb-6 ' style={{ color: mode === 'dark' ? 'white' : 'black' }}>Top Category</h1>
                    <div className="flex flex-wrap ">
                        <div className="lg:p-4  p-2 md:w-1/3 w-full ">
                            <div className={`border-2  ${mode==='dark'?"bg-[#2c3e50]":"bg-gray-200"}  lg:p-7 md:p-3.5 p-5 cursor-pointer 
                            hover:bg-[url(img/category-bg.jpg)] border-gray-200
                            bg-no-repeat bg-cover
                            border-opacity-60  
                            overflow-hidden rounded-2xl`}>
                                <div className={` ${mode==='dark'?"bg-[#2c3e50]":"bg-white"} p-2`}>
                                    <div className={`${mode==='dark'?"bg-[#34495e]":"bg-gray-200"}`}>
                                        <div className="flex justify-center">
                                            <div className="">
                                                <h1 className='text-center lg:text-3xl md:text-lg text-lg relative font-light lg:top-8 md:top-1 top-5'>Green Plants</h1>
                                                <img className=" w-[90%] h-[90%] -mt-5" src="https://opencart.mahardhi.com/MT05/paudha/image/cache/catalog/category/1-310x440.png" alt="blog" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="lg:p-4 p-2 md:w-1/3 w-full ">
                            <div className={`border-2  ${mode==='dark'?"bg-[#2c3e50]":"bg-gray-200"}  lg:p-7 md:p-3.5 p-5 cursor-pointer 
                            hover:bg-[url(img/category-bg.jpg)] border-gray-200
                            bg-no-repeat bg-cover
                            border-opacity-60  
                            overflow-hidden rounded-2xl`}>
                                <div className={` ${mode==='dark'?"bg-[#2c3e50]":"bg-white"} p-2`}>
                                    <div className={`${mode==='dark'?"bg-[#34495e]":"bg-gray-200"}`}>
                                        <div className="flex justify-center">
                                            <div className="">
                                                <h1 className='text-center lg:text-3xl md:text-base text-lg relative font-light lg:top-8 md:top-1 top-5'>Biennial Plants</h1>
                                                <img className=" lg:w-[90%] lg:h-[90%] md:w-[90%] md:h-[90%] -mt-5" src="https://opencart.mahardhi.com/MT05/paudha/image/cache/catalog/category/2-310x440.png" alt="blog" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:p-4 p-2 md:w-1/3 w-full">
                            <div className={`border-2  ${mode==='dark'?"bg-[#2c3e50]":"bg-gray-200"}  lg:p-7 md:p-3.5 p-5 cursor-pointer 
                            hover:bg-[url(img/category-bg.jpg)] border-gray-200
                            bg-no-repeat bg-cover
                            border-opacity-60  
                            overflow-hidden rounded-2xl`}>
                                <div className={` ${mode==='dark'?"bg-[#2c3e50]":"bg-white"} p-2`}>
                                    <div className={`${mode==='dark'?"bg-[#34495e]":"bg-gray-200"}`}>
                                        <div className="flex justify-center">
                                            <div className="">
                                                <h1 className='text-center lg:text-3xl md:text-base text-lg relative font-light lg:top-8 md:top-1 top-5'>Aglaonema Plant</h1>
                                                <img className=" lg:w-[90%] lg:h-[90%] md:w-[90%] md:h-[90%] -mt-5" src="https://opencart.mahardhi.com/MT05/paudha/image/cache/catalog/category/3-310x440.png" alt="blog" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default TopCategory