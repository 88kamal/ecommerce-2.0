import React, { useContext } from 'react'
import { useState } from 'react';
import { fireDB } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
import allContext from '../../context/allContext/allContext';

function Order() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const userid = JSON.parse(localStorage.getItem('currentUser')).user.uid
  useEffect(() => {
    getOrderData()
  }, [])

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const context = useContext(allContext)
  const { toggleMode, mode } = context
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? 
      
    (<>
      <div className=" h-full pt-10">
        {
          order.filter(obj => obj.userid == userid).map((order) => {
            // order.cartItems.map()
            return (
              <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                {
                  order.cartItems.map((item) => {
                    return (
                      <div className="rounded-lg md:w-2/3">
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                          <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                              <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                              <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </>)
    :
    (
      <h2 className=' text-center tex-2xl'>Not Order</h2>
    )
      
    }
     
    </Layout>
  )
}

export default Order