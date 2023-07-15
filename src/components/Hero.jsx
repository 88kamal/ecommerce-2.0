// import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { Link } from 'react-router-dom';

// const handleDragStart = (e) => e.preventDefault();
// const items = [
//   <img className='rounded-2xl border' src='banner/maxresdefault.jpg' onDragStart={handleDragStart} role="presentation" />,
//   <img className='rounded-2xl border' src='img/b2.png' onDragStart={handleDragStart} role="presentation" />,
//   <img className='rounded-2xl border' src='img/b8.png' onDragStart={handleDragStart} role="presentation" />,
//   <img className='rounded-2xl border' src='img/b7.png' onDragStart={handleDragStart} role="presentation" />,

// ];
// function Hero() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font ">
//         <div className="container px-5 md:px-0 lg:px-0 mt-6  md:mt-10 mx-auto">
//           <div className="flex flex-wrap ">
//             <div className="lg:w-1/2 sm:w-1/2 p-1">
//               <div className="flex relative">
//                 <Link to={'/allproducts'}>
//                 <img alt="gallery" className="w-full h-full object-cover object-center" src="banner/banner-1.webp" />
//                 </Link>
//               </div>
//             </div>
//             <div className="lg:w-1/2 sm:w-1/2 p-1">
//               <div className="flex relative">
//              <Link to={'/allproducts'}>
//              <img alt="gallery" className="w-full h-full object-cover object-center" src="banner/banner-4.webp" />
//              </Link>
//               </div>
//             </div>
//             <div className="lg:w-1/2 sm:w-1/2 p-1">
//               <div className="flex relative">
//                 <Link to={'/allproducts'}>
//                     <img alt="gallery" className="w-full h-full object-cover object-center" src="banner/banner-4.webp" />
//                 </Link>
//               </div>
//             </div>
//             <div className="lg:w-1/2 sm:w-1/2 p-1">
//               <div className="flex relative">
//                 <Link to={'/allproducts'}>
//                  <img alt="gallery" className="w-full h-full object-cover object-center" src="banner/banner-1.webp" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
//         <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//           <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
//             <div className="max-w-xl mb-6">
//               <div>
//                 <p className="inline-block py-px mb-2 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">E-Bharat</p>
//               </div>
//               <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
//                 Everything you
//                 <br className="hidden md:block" />
//                 can imagine{' '}
//                 <span className="inline-block text-deep-purple-accent-400">is real</span>
//               </h2>
//               <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <button type="button" class="focus:outline-none text-white bg-pink-600 hover:bg-purple-800 outline-0 rounded-lg text-sm px-5 py-2.5 mb-2">Order Now</button>

//               <button type="button" class="focus:outline-none text-white bg-violet-600 hover:bg-purple-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">All Products</button>

//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <div className=" w-full">
//               <img className="" src="img/hero.png" alt="" />
//             </div>
           
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="container mx-auto mt-10 px-4 ">
//         <AliceCarousel
//          mouseTracking items={items} 
//          autoPlay={true} 
//          disableButtonsControls
//          infinite
//          />
//       </div> */}

//     </div>
//   )
// }

// export default Hero

import React from 'react'
import Carousels from './Carousels'

function Hero() {
  return (      
    <div className=' main    mb-8 lg:mb-0 md:mb-8 bg-[url(img/main-banner-bg.jpg)] lg:w-[50%] lg:h-[48em] bg-no-repeat md:w-[50%] md:h-[27em] w-[50%] h-[13.3em]' >
      <div className=" absolute lg:p-8 md:p-5 p-2">
      <Carousels/>
      </div>
    </div>
  )
}

export default Hero