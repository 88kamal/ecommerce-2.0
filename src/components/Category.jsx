import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext'
import { Link } from 'react-router-dom'

function Category() {
    const context = useContext(allContext)
    const { mode } = context

    return (
        <div>
            <div>
                <div className="flex flex-col container mx-auto px-4 md:px-0 lg:px-0 mt-5">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Explore Categories</h1>
                        <div class="h-1 w-20 bg-pink-600 rounded"></div>
                    </div>
                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div className="flex flex-nowrap">
                            <Link to={'fashion'}>
                                <div className="inline-block px-3 ">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5  border shadow-md bg-gray-100 hover:shadow-xl  transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <div className="flex justify-center mb-12">
                                            <img className=' w-32' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Fashion</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/shirts'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-2">
                                            <img className=' w-32' src="https://i.pinimg.com/564x/93/b6/48/93b648385af54168409f7c638f9a5e31.jpg" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Shirts</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'jackets'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-2">
                                            <img className=' w-32' src="https://i.pinimg.com/564x/5e/5d/fe/5e5dfe15c1ea8313c193038136632e24.jpg" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Jacket</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/mobiles'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-2">
                                            <img className=' w-32' src="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=70" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Mobiles</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/electronics'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-12">
                                            <img className=' w-32' src="https://i.pinimg.com/564x/c3/e0/6c/c3e06c392e5522ae9f19b78a7a07c658.jpg" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Electronics</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/shoes'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-12">
                                            <img className=' w-32 rounded-xl' src="https://i.pinimg.com/564x/1f/7c/e8/1f7ce8d6d4dae3c46f438d3c922dcf2a.jpg" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Shoes</h1>
                                    </div>
                                </div>
                            </Link>


                            <Link to={'/home'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5 border  shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-12">
                                            <img className=' w-32' src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Home</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/sportsbook'}>
                                <div className="inline-block px-3">
                                    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg p-5  border shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <div className="flex justify-center mb-2">
                                            <img className=' w-28' src="https://rukminim1.flixcart.com/image/312/312/ksoz53k0/book/n/n/n/miss-chief-lokpriya-baalgeet-original-imag6742qhkhdhye.jpeg?q=70" alt="" />
                                        </div>
                                        <h1 className=' text-3xl text-center font-medium title-font '>Sports, Books & More
                                        </h1>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
            </div>
        </div>
    )
}

export default Category