import { Fragment, useContext, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import allContext from '../context/allContext/allContext'
import { MdDarkMode } from 'react-icons/md'
import { BsMoon, BsFillMoonFill, BsFillCloudSunFill, BsCloudSun } from 'react-icons/bs'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'

export default function TopNavbar() {
    const [open, setOpen] = useState(false)
    const { cartItems } = useSelector(state => state.cartReducer);
    // console.log(cartItems);
    const logout = () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentAdmin');
        window.location.href = '/login'
    }

    const context = useContext(allContext)
    const { toggleMode, mode, ProtectedRoutesForAdmin } = context
    const admin = JSON.parse(localStorage.getItem('currentAdmin'))
    return (
        <div className="bg-white sticky top-0 z-50  "  >
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <div className="flex px-4 pb-2 pt-28">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>




                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {/* <div className="flow-root">
                                        <Link to={'/login'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link to={'/signup'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                                            Create account
                                        </Link>
                                    </div> */}
                                   
                                    <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        All Products
                                    </Link>
                                    <div className="flow-root">
                                        <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                                            Order
                                        </Link>
                                    </div>
                                    {/* <ProtectedRoutesForAdmin> */}
                                    {admin.user.email === "knupadhyay784@gmail.com"?<>
                                     <div className="flow-root">
                                            <Link to={'/admin'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                                admin
                                            </Link>
                                        </div>
                                    </>: ""}
                                    
                                       
                                    {/* </ProtectedRoutesForAdmin> */}

                                    <div className="flow-root">
                                        <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Logout
                                        </a>
                                    </div>
                                    {/* <div className="flow-root">
                                        <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                                            <img
                                                className="inline-block w-10 h-10 rounded-full"
                                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                                alt="Dan_Abromov" />                                        </Link>
                                    </div> */}
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="img/indiaflag.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                {/* <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    Get free delivery on orders over ₹300
                </p> */}

                <nav aria-label="Top" className="bg-[url(/img/main-banner-bg.jpg)] bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8 shadow-xl " >
                    <div className="">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                {/* <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a> */}
                                <Link to={'/'} className='flex'>
                                    <div className="flex ">
                                        <img className=' w-40' src="https://opencart.mahardhi.com/MT05/paudha/image/catalog/logo.png" alt="" />
                                        {/* <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1> */}
                                    </div>
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {/* <Link to={'/login'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Sign in
                                    </Link>
                                    <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
                                    <Link to={'/signup'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Create account
                                    </Link> */}
                                      <li className=" list-none  text-white ">
                                        <div className="dropdown inline-block  ">
                                            <button className=" text-white  rounded inline-flex items-center">
                                                <span className="">Pots & Planters</span>
                                            </button>
                                            <ul className="dropdown-menu  absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link to={'/aboutvayparexpo'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">About Vyapar Expo 2023</Link></li>
                                                <hr />
                                                <li className><Link to={'/aboutorganizer'} className="bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap ">About Oraganiser</Link></li>
                                                <hr />
                                                {/* <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Vyapar Team</a></li> */}
                                                {/* <hr />
                                            <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Food & Agro Vyapar Expo</a></li> */}


                                            </ul>
                                            </div>
                                    </li>
                                    <Link to={'/allproducts'} className="text-sm font-medium text-gray-100 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        All Products
                                    </Link>
                                    <Link to={'/order'} className="text-sm font-medium text-gray-100 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Order
                                    </Link>
                                    {/* <ProtectedRoutesForAdmin> */}
                                    {admin.user.email === "knupadhyay784@gmail.com" ? <>
                                    <Link to={'/admin'} className="text-sm font-medium text-gray-100 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Dashboard
                                        </Link>
                                    </>: ""}
                                        
                                    {/* </ProtectedRoutesForAdmin> */}

                                    <a onClick={logout} className="text-sm font-medium text-gray-100 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Logout
                                    </a>
                                    {/* <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  ">
                                    <img
                                                className="inline-block w-10 h-10 rounded-full"
                                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                                alt="Dan_Abromov" />              
                                    </a> */}
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-100 ">
                                        <img
                                            src="img/indiaflag.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                                    </a>
                                </div>
                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 ">
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                            alt="Dan_Abromov" />
                                    </a>
                                </div> */}

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <button className='' onClick={toggleMode}>
                                        {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                                        {mode === 'light' ?
                                            (<FiSun className='' size={30} color='white' />
                                            ) : 'dark' ?
                                                (<BsFillCloudSunFill size={30} color='white' />
                                                ) : ''}
                                    </button>
                                </div>
                                {/* <div className="flex lg:ml-">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                        </svg>

                                    </a>
                                </div> */}

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        <ShoppingBagIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
