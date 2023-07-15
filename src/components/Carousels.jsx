import { Carousel } from '@material-tailwind/react'
import React from 'react'

function Carousels() {
  return (
    <div>
       <Carousel transition={{type:"tween", duration: 2}} autoplay={true} autoplayDelay={5000} loop={true}className="rounded-none">
      <img
        src="img/mainbanner1-1680x900.jpg"
        alt="image 1"
        className="w-[100%]"
      />
      <img
        src="img/mainbanner2-1680x900.jpg"
        alt="image 2"
        className="w-[100%]"
      />
    </Carousel>
    </div>
  )
}

export default Carousels