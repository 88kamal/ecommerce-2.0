import React, { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMobileVibration } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import allContext from "../../context/allContext/allContext";

const FooterDes = () => {
  const context = useContext(allContext);
  const {mode} = context
  return (
    <>
      <div className="lg:flex hidden justify-center gap-16 ">
        <div className="w-64">
          <h1 className="text-xl font-bold " style={{color:mode==='dark'?'white':'black'}}>CONTACT INFO</h1>
          <div className="flex flex-col gap-4 pt-5 text-gray-500">
            <div className="flex gap-5 item center">
              <IoIosPin className="text-green-500 text-4xl" />
              <p>71 Pennington Lane Vernon Rockville, CT 06066</p>
            </div>
            <div className="flex gap-5 item center">
              <FiPhoneCall className="text-green-500 text-2xl" />
              <p>+91 123 456 789</p>
            </div>
            <div className="flex gap-5 item center">
              <BiMobileVibration className="text-green-500 text-2xl" />
              <p>+91 123 456 789</p>
            </div>
            <div className="flex gap-5 item center">
              <AiFillMail className="text-green-500 text-2xl" />
              <p>demo@Yourstore.com</p>
            </div>
          </div>
        </div>

        <div className="w-64">
          <h1 className="text-xl font-bold " style={{color:mode==='dark'?'white':'black'}}> INFORMATION</h1>
          <div className="flex flex-col text-gray-500 gap-4 pt-5">
            <h1>About Us</h1>
            <h1>Delivery Information</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms & Condition</h1>
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="w-64">
          <h1 className="text-xl font-bold " style={{color:mode==='dark'?'white':'black'}}> MY ACCOUNT</h1>
          <div className="flex flex-col text-gray-500 gap-4 pt-5">
            <h1>My Account</h1>
            <h1>Order History</h1>
            <h1>Wishlist</h1>
            <h1>Newsletter</h1>
            <h1>Returns</h1>
          </div>
        </div>
        <div className="w-64">
          <h1 className="text-xl font-bold " style={{color:mode==='dark'?'white':'black'}}> EXTRAS</h1>
          <div className="flex flex-col text-gray-500 gap-4 pt-5">
            <h1>Brands</h1>
            <h1>Gift Certificates</h1>
            <h1>Affilate</h1>
            <h1>Specials</h1>
            <h1>Site Map</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-2 h-12 w-full lg:mx-20 mx-5 border-l-0  border-r-0 border-t-0"></div>
      </div>

      <div className=" w-full lg:px-20 px-5 flex justify-between items-center">
        <h1 className="font-bold lg:text-lg md:text-lg text-sm" style={{color:mode==='dark'?'white':'black'}}>Powered By Smart Agri Innovation @2023</h1>
        <div className="flex gap-2">
          <img
            className="w-full p-2"
            src="img/payment.png"
            alt=""
          />
         
        </div>
      </div>
    </>
  );
};

export default FooterDes;