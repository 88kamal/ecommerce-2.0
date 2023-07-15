import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { fireDB } from '../firebase/firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import { useNavigate } from "react-router-dom"
import Filter from '../components/Filter';
import { formatDistance } from 'date-fns';
import allContext from '../context/allContext/allContext';

function AllProducts() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [product, setProduct] = useState([]);
    //   console.log(product)
    const { cartItems } = useSelector(state => state.cartReducer)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // console.log(cartItems)
    const navigate = useNavigate();

    // get product
    const getProductData = async () => {
        setLoading(true)
        try {
            const q = query(
                collection(fireDB, "products"),
                // orderBy("date"),
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productsArray)
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData();
    }, []);

    // add to cart
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])



    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    const context = useContext(allContext)
    const { toggleMode, mode } = context



    return (
        <Layout loading={loading}>
            {/* {console.log(product)} */}
            <Filter searchkey={searchkey} setSearchkey={setSearchkey} filterType={filterType} setFilterType={setFilterType}
                filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
          <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto ">
          <div class=" w-full mb-6 lg:mb-10">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900 text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>Trending Products</h1>
            {/* <div class="h-1 w-20 bg-pink-600 rounded"></div> */}
          </div>
          {/* {product.filter((obj) => obj.title.toLowerCase().includes(!searchkey))} */}

          <div className="flex flex-wrap -m-4 mb-5">
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              // .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                return (
                  <>
                    <div className="p-4 md:w-1/3 lg:w-1/4 drop-shadow-lg " key={index}>
                      <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out bg-gray-100    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                        <div className="flex justify-center cursor-pointer" onClick={() => navigate(`/productinfo/${item.id}`)}>
                          <img className="  w-full hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={item.imageUrl} alt="blog" />
                        </div>
                        <div className="p-5 border-t-2">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Paudha</h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{item.title.substr(0, 50)}</h1>
                          {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{item.description.substr(0, 30)}</h1> */}
                          {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                          <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>

                          <div className=" flex justify-between   gap-2">
                            <div className=" bg-gray-300 p-2.5 rounded-full cursor-pointer" onClick={() => addToCart(item)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                              </svg>
                            </div>
                            <div className="bg-gray-300 p-2.5 rounded-full cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                            </div>
                            <div className="bg-gray-300 p-2.5 rounded-full cursor-pointer" onClick={() => navigate(`/productinfo/${item.id}`)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div className="bg-gray-300 p-2.5 rounded-full cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                              </svg>
                            </div>
                          </div>
                          {/* <div className=" flex justify-center">
                            <button type="button" onClick={() => addToCart(item)} className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                          </div> */}
                        </div>

                      </div>
                    </div>


                  </>

                )
              })}
           
          </div> 
          
          {/* ): */}
          {/* ( */}
          {/* <>
          <h1 className=' text-center text-2xl text-pink-600'>Not Found</h1>
          </> */}
          {/* )} */}
        </div>
      </section>
        </Layout>
    )
}

export default AllProducts


