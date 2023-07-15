import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMobileVibration } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

function FooterMob({}) {
  const [data1, setData1] = useState("");
  const [catFaq, setCatFaq] = useState([]);

  return (
    <div className="lg:hidden">
      <div className="contianer px-5 md:px-64">
        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 " x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between  w-[350px] md:w-[600px] lg:w-[1000px]  font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setData1(data1 == 1 ? "" : "1");
                }}
              >
                <span className="text-black font-bold w-[350px] lg:w-[350px]">
                  CONTACT INFO
                </span>

                <svg
                  className="w-8 h-8"
                  class="fill-current text-black font-extrabold h-10 w-10 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </h2>
              {data1 == "1" && (
                <div class=" duration-900  transform transition-transform scroll-smooth ">
                  <p class="p-3 text-gray-900 transition duration-700 ease-in-out">
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
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 " x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between  w-[350px] md:w-[600px] lg:w-[1000px]   font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setData1(data1 == 2 ? "" : "2");
                }}
              >
                <span className="text-black w-[350px] font-bold">
                  INFORMATION
                </span>
                <svg
                  className="w-8 h-8"
                  class="fill-current text-black font-extrabold h-10 w-10transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </h2>
              {data1 == "2" && (
                <div class=" duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-500">
                    <div className="flex flex-col text-gray-500 gap-4 pt-5">
                      <h1>About Us</h1>
                      <h1>Delivery Information</h1>
                      <h1>Privacy Policy</h1>
                      <h1>Terms & Condition</h1>
                      <h1>Contact Us</h1>
                    </div>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 " x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between  w-[350px] md:w-[600px] lg:w-[1000px]   items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setData1(data1 == 3 ? "" : "3");
                }}
              >
                <span className="text-black w-[350px] font-bold">
                  MY ACCOUNT
                </span>
                <svg
                  className="w-8 h-8"
                  class="fill-current text-black font-extrabold h-10 w-10 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </h2>
              {data1 == "3" && (
                <div class=" duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    <div className="flex flex-col text-gray-500 gap-4 pt-5">
                      <h1>My Account</h1>
                      <h1>Order History</h1>
                      <h1>Wishlist</h1>
                      <h1>Newsletter</h1>
                      <h1>Returns</h1>
                    </div>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 " x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between  w-[350px] md:w-[600px] lg:w-[1000px]   items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setData1(data1 == 4 ? "" : "4");
                }}
              >
                <span className="text-black w-[350px] font-bold">EXTRAS</span>
                <svg
                  className="w-8 h-8"
                  class="fill-current text-black font-extrabold h-10 w-10 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </h2>
              {data1 == "4" && (
                <div class=" duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-500">
                    {" "}
                    <div className="flex flex-col text-gray-500 gap-4 pt-5">
                      <h1>Brands</h1>
                      <h1>Gift Certificates</h1>
                      <h1>Affilate</h1>
                      <h1>Specials</h1>
                      <h1>Site Map</h1>
                    </div>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterMob;