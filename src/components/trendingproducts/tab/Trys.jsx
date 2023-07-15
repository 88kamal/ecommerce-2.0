import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
// import './style.css';

const img1 = 'https://media.istockphoto.com/id/531128027/photo/tropical-plant.jpg?s=612x612&w=0&k=20&c=abpl9sy9SYRuN5wYaXvqoSdmNCcwqaFE7ACL8um40Rw='
const img2 = 'https://media.istockphoto.com/id/520416162/photo/fern-green-vase-in-black-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=oEYLkKbHK0JjrtEtKWMMX_X99KkGCtUp1WvcyZcMZEg='

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <div className="flex justify-center">
      <img 
    className=' w-80 h-80 cursor-pointer mb-2'
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
    </div>
  )
}

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={img1}
        secondaryImg={img2}
        alt="" />
    </div>
  )
}


// class Trys extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React'
  //   };
  // }

//   render() {
//     return (
//       <div>
//         <ImageChangeOnMouseOver/>
//       </div>
//     );
//   }
// }

// render(<Trys />, document.getElementById('root'));


export class Trys extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
        <ImageChangeOnMouseOver/>
      </div>
    )
  }
}

export default Trys