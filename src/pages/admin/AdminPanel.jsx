import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import AllDetails from './AllDetails';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, setDoc, startAfter, limitToLast, endBefore } from 'firebase/firestore';
import { fireDB } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import Modal from 'react-modal';
import allContext from '../../context/allContext/allContext';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';


function AdminPanel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [loading, setLoading] = useState(false);
  // product props
  const [product, setProduct] = useState([]);

  // console.log(new Date().toLocaleString())

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })
  // console.log(products.title)
  const [order, setOrder] = useState([]);
  const [addressInfo, setAddressInfo] = useState([]);

  // ********************** Modal Section  Start **********************
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  // ********************** Modal Section  End **********************

  const navigate = useNavigate()



  // ********************** Add Product Section Start **********************

  const [add, setAdd] = useState(false)
  const addHandler = () => {
    setAdd(true)
    openModal()
  }
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      getProductData()
      closeModal()
      setLoading(false)
      window.location.href = "/admin"
      // navigate('/admin')
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    // window.location.reload()
    setProducts("")
  }
  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        // orderBy("date"),
        // limit(5)
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


  // pagination 

  // const [page, setPage] = useState(1);




  // const showNext = ({ item }) => {
  //   if (product.length === 0) {
  //     alert("Thats all we have for now !")
  //   } else {
  //     const fetchNextData = async () => {
  //       const users = await getDocs(collection(fireDB, "products"),
  //         limit(5),
  //         startAfter(item.date))
  //       const productsArray = [];
  //       users.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         // console.log(doc.id, " => ", doc.data());
  //         const obj = {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //         productsArray.push(obj);
  //       });
  //       setProduct(productsArray);
  //       setPage(page + 1)
  //     };
  //     fetchNextData();
  //   }
  // };


  // const showPrevious = ({ item }) => {
  //   const fetchPreviousData = async () => {
  //     const users = await getDocs(collection(fireDB, "products"),
  //       endBefore(item.date),
  //       limitToLast(10)
  //     )
  //     const productsArray = [];
  //     users.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, " => ", doc.data());
  //       const obj = {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //       productsArray.push(obj);
  //     });
  //     setProduct(productsArray);
  //     setPage(page - 1)
  //   };
  //   fetchPreviousData();
  // };











  // ********************** Add Product Section  End **********************

  // ********************** Update Product Section  Start **********************
  const edithandle = (item) => {
    setProducts(item)
    setIsOpen(true)
    setAdd(false)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }
  // ********************** Update Product Section  End **********************

  // ********************** Delete Product Section  Start **********************

  // const deleteProduct = async (item) => {
  //   try {
  //     setLoading(true)
  //     await deleteDoc(doc(fireDB, "products", item.id));
  //     // toast.success("Product Deleted successfully")
  //     setLoading(false)
  //     getProductData();
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  // ********************** Delete Product Section  End **********************




  // order

  const context = useContext(allContext)
  const { toggleMode, mode } = context



  const getOrdersData = async () => {
    const q = query(
      collection(fireDB, "orders"),
      orderBy("date"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let orderArray = [];
      QuerySnapshot.forEach((doc) => {
        orderArray.push({ ...doc.data(), id: doc.id });
      });
      setOrder(orderArray)
    });

    return () => data;

  }


  useEffect(() => {
    getOrdersData()
  }, [])




  // user

  const userData = async () => {
    const q = query(
      collection(fireDB, "orders"),
      orderBy("date"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let userArray = [];
      QuerySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id });
      });
      setAddressInfo(userArray)
    });

    return () => data;

  }

  useEffect(() => {
    userData()
  }, []);


  const addFunc = () =>{
    navigate('/addproduct')
  }



  return (
    <Layout loading={loading} >
      <div className="container mx-auto">
        <AllDetails product={product} order={order} addressInfo={addressInfo} />
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" " >
            <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
              <Tab>
                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits />Products</div> </button>
              </Tab>
              <Tab>
                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
              <Tab>
                <button type="button" className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center ">
                  <div className="flex gap-2 items-center">
                    <FaUser /> Users
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              {/* <Product product={product} setProduct={setProduct} products={products} setProducts={setProducts} setLoading={setLoading} /> */}
              <div className='  px-4 md:px-0 mb-16'>
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                <div className=" flex justify-end">
                  <button
                    type="button"
                    onClick={addFunc}
                    className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} > <div className="flex gap-2 items-center">
                      Add Product <FaCartPlus size={20} />
                    </div></button>
                </div>
                <div className="relative overflow-x-auto ">

                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className=''>
                      {product.map((item, index) => {
                        return (
                          <tr key={index} className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                              <img className='w-16' src={item.imageUrl} alt="img" />
                            </th>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {item.title}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              ₹{item.price}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {item.category}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {item.date}
                            </td>
                            <td className="px-6 py-4">
                              <div className=" flex gap-2">
                                <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                  <div  >
                                    <svg onClick={() => deleteProduct(item)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                  </div>
                                  <div onClick={() => edithandle(item)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {/* <div className="">
                    {
                      //show previous button only when we have items
                      page === 1 ? '' :
                        <button onClick={() => showPrevious({ item: product[0] })}>Previous</button>
                    }

                    {
                      //show next button only when we have items
                      product.length < 5 ? '' :
                        <button onClick={() => showNext({ item: product[product.length - 1] })}>Next</button>
                    }
                  </div> */}

                  {/* <button onClick={() => showPrevious({ item: product[0] })}>pre</button> */}
                </div>
                <div className="modal">
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-40 " />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center mt-24 md:mt-12 justify-center  text-center ">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl   text-left align-middle  transition-all bg-gray-100 border border-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                              <section className="">
                                <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0 ">

                                  <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">

                                    <div className="px-6 py-6  ">
                                      <h1 className=' text-center mb-4 font-semibold text-2xl underline'>{add !== true ? 'Edit Product' : 'Add Product'}</h1>
                                      <form>
                                        <div className="mb-3">

                                          <input type="text" onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product Title" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
                                        </div>
                                        <div className="mb-3">

                                          <input type="text" onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price} name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product price" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
                                        </div>
                                        <div className="mb-3">

                                          <input type="text" onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl} name='imageurl' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product image url" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
                                        </div>
                                        <div className="mb-3">

                                          <input type="text" onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category} name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product Category" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
                                        </div>
                                        <div className="mb-3">
                                          <textarea id="message" name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })} value={products.description} rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product message" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
                                        </div>

                                      </form>
                                      {add ? (
                                        <button onClick={() => { addProduct(); closeModal() }} type="button" className="focus:outline-none w-full text-white bg-pink-600 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] border hover:bg-pink-700  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Add Product</button>) : (
                                        <button onClick={() => { updateProduct(); closeModal() }} type="button" className="focus:outline-none w-full text-white bg-pink-600 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] border hover:bg-pink-700  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Update Product</button>)}
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>

              </div>
            </TabPanel>
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-16">
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Order Details</h1>
                {order.map((order, index) => {
                  // console.log(order.addressInfo.nam)
                  return (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" key={index}>
                      <thead key={index} className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                        <tr>
                          {/* <th scope="col" className="px-6 py-3">
                    S.No
                  </th> */}
                          <th scope="col" className="px-6 py-3">
                            Payment Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Image
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Address
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Pincode
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Phone Number
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.cartItems.map((item, index) => {
                          // {console.log(item)}
                          return (
                            <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} key={index} >
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.paymentId}
                              </td>
                              <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                <img className='w-16' src={item.imageUrl} alt="img" />
                              </th>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {item.title}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                ₹{item.price}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {item.category}
                              </td>
                              {/* <td className="px-6 py-4 text-black ">
                    {item.date}
                  </td> */}
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.addressInfo.name}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.addressInfo.address}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.addressInfo.pincode}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.addressInfo.phoneNumber}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.email}
                              </td>
                              <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {order.addressInfo.date}
                              </td>

                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  )
                })}
              </div>
            </TabPanel>
            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-10">
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(addressInfo).map((i, index) => {
                      return (
                        <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].addressInfo.name}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].addressInfo.address}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].addressInfo.pincode}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].addressInfo.phoneNumber}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].email}
                          </td>
                          <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {addressInfo[i].addressInfo.date}
                          </td>

                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </TabPanel>

          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

// product Component
// function Product({ product, setProduct, products, setProducts, setLoading }) {
//   // ********************** Modal Section  Start **********************
//   let [isOpen, setIsOpen] = useState(false)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }
//   // ********************** Modal Section  End **********************




//   // ********************** Add Product Section Start **********************

//   const [add, setAdd] = useState(false)
//   const addHandler = () => {
//     setAdd(true)
//     openModal()
//   }
//   const addProduct = async (e) => {
//     const productRef = collection(fireDB, "products")
//     setLoading(true)

//     try {
//       await addDoc(productRef, products)
//       toast.success("Product Add successfully")
//       getProductData()
//       closeModal()
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//     // window.location.reload()
//   }
//   // ****** get product
//   const getProductData = async () => {
//     setLoading(true)
//     try {
//       const q = query(
//         collection(fireDB, "products"),
//         // orderBy("date"),
//       );
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let productsArray = [];
//         QuerySnapshot.forEach((doc) => {
//           productsArray.push({ ...doc.data(), id: doc.id });
//         });
//         setProduct(productsArray)
//         getProductData()
//         setLoading(false);

//       });
//       return () => data;
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getProductData();
//   }, []);
//   // ********************** Add Product Section  End **********************

//   // ********************** Update Product Section  Start **********************
//   const edithandle = (item) => {
//     setProducts(item)
//     setIsOpen(true)
//     setAdd(false)
//   }
//   // update product
//   const updateProduct = async (item) => {
//     setLoading(true)
//     try {
//       await setDoc(doc(fireDB, "products", products.id), products);
//       toast.success("Product Updated successfully")
//       getProductData();
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//       console.log(error)
//     }
//     setProducts("")
//   }
//   // ********************** Update Product Section  End **********************

//   // ********************** Delete Product Section  Start **********************

//   // const deleteProduct = async (item) => {
//   //   try {
//   //     setLoading(true)
//   //     await deleteDoc(doc(fireDB, "products", item.id));
//   //     // toast.success("Product Deleted successfully")
//   //     setLoading(false)
//   //     getProductData();
//   //   } catch (error) {
//   //     console.log(error)
//   //     setLoading(false)
//   //   }
//   // }

//   const deleteProduct = async (item) => {

//     try {
//       setLoading(true)
//       await deleteDoc(doc(fireDB, "products", item.id));
//       toast.success('Product Deleted successfully')
//       setLoading(false)
//       getProductData()
//     } catch (error) {
//       // toast.success('Product Deleted Falied')
//       setLoading(false)
//     }
//   }

//   // ********************** Delete Product Section  End **********************



//   const context = useContext(allContext)
//   const { toggleMode, mode } = context
//   return (
//     <div className='  px-4 md:px-0'>
//       <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
//       <div className=" flex justify-end">
//         <button
//           type="button"
//           onClick={addHandler}
//           className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} > <div className="flex gap-2 items-center">
//             Add Product <FaCartPlus size={20} />
//           </div></button>
//       </div>
//       <div className="relative overflow-x-auto ">

//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
//           <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Image
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Category
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className=''>
//             {product.map((item, index) => {
//               return (
//                 <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//                   <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
//                     <img className='w-16' src={item.imageUrl} alt="img" />
//                   </th>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {item.title}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     ₹{item.price}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {item.category}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {item.date}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className=" flex gap-2">
//                       <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         <div  >
//                           <svg onClick={() => deleteProduct(item)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                           </svg>
//                         </div>
//                         <div onClick={() => edithandle(item)} >
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="modal">
//         <Transition appear show={isOpen} as={Fragment}>
//           <Dialog as="div" className="relative z-10 " onClose={closeModal}>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-40 " />
//             </Transition.Child>

//             <div className="fixed inset-0 overflow-y-auto ">
//               <div className="flex min-h-full items-center mt-24 md:mt-12 justify-center  text-center ">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-out duration-300"
//                   enterFrom="opacity-0 scale-95"
//                   enterTo="opacity-100 scale-100"
//                   leave="ease-in duration-200"
//                   leaveFrom="opacity-100 scale-100"
//                   leaveTo="opacity-0 scale-95"
//                 >
//                   <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl   text-left align-middle  transition-all bg-gray-100 border border-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//                     <section className="">
//                       <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0 ">

//                         <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">

//                           <div className="px-6 py-6  ">
//                             <h1 className=' text-center mb-4 font-semibold text-2xl underline'>{add !== true ? 'Edit Product' : 'Add Product'}</h1>
//                             <form>
//                               <div className="mb-3">

//                                 <input type="text" onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product Title" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
//                               </div>
//                               <div className="mb-3">

//                                 <input type="text" onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price} name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product price" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
//                               </div>
//                               <div className="mb-3">

//                                 <input type="text" onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl} name='imageurl' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product image url" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
//                               </div>
//                               <div className="mb-3">

//                                 <input type="text" onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category} name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product Category" required style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
//                               </div>
//                               <div className="mb-3">
//                                 <textarea id="message" name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })} value={products.description} rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] block w-full p-2.5 " placeholder="Product message" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} />
//                               </div>

//                             </form>
//                             {add ? (
//                               <button onClick={() => { addProduct(); closeModal() }} type="button" className="focus:outline-none w-full text-white bg-pink-600 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] border hover:bg-pink-700  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Add Product</button>) : (
//                               <button onClick={() => { updateProduct(); closeModal() }} type="button" className="focus:outline-none w-full text-white bg-pink-600 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] border hover:bg-pink-700  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Update Product</button>)}
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </div>
//           </Dialog>
//         </Transition>
//       </div>

//     </div>
//     // <>
//     //   <h1>Product</h1>
//     //   <div className="d-flex justify-content-between">
//     //     <h3>Product List</h3>
//     //     <div>
//     //       <button type="button" className="button-34 my-2" onClick={addHandler}>Add Product</button>
//     //     </div>
//     //   </div>
//     //   <table className="table border">
//     //     <thead className=' bg-dark text-light' >
//     //       <tr>
//     //         <th scope="col">Image</th>
//     //         <th scope="col ">Name</th>
//     //         <th scope="col">Category</th>
//     //         <th scope="col">Price</th>
//     //         <th scope="col">Date</th>
//     //         <th scope="col">Delete</th>
//     //       </tr>
//     //     </thead>
//     //     <tbody>
//     //       {
//     //         product.map(item => {
//     //           return (
//     //             <tr key={item.id}>
//     //               <td >
//     //                 <div >
//     //                   <img src={item.imageUrl} alt="itemimage" className='' style={{ width: '100px' }} />
//     //                 </div>
//     //               </td>
//     //               <td className='' >{item.title}</td>
//     //               <td>{item.category}</td>
//     //               <td>{item.price}</td>
//     //               <td>{item.date}</td>
//     //               <td style={{ cursor: 'pointer' }}><AiFillDelete size={30} onClick={() => deleteProduct(item)} /> <div size={30} onClick={() => edithandle(item)} >update</div></td>
//     //               {/* <td style={{ cursor: 'pointer' }}><GrEdit size={30} /></td> */}
//     //             </tr>

//     //           )
//     //         })
//     //       }
//     //     </tbody>
//     //   </table>

//     //   <div>
//     //     {/* <button onClick={openModal}>Open Modal</button> */}
//     //     <Modal
//     //       isOpen={modalIsOpen}
//     //       onAfterOpen={afterOpenModal}
//     //       onRequestClose={closeModal}
//     //       style={customStyles}
//     //       contentLabel="Example Modal"
//     //     >
//     //       <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//     //       <button onClick={closeModal}>close</button>
//     //       <div>I am a modal</div>
//     //       <form className=''>
//     //               <div class="form-group ">
//     //                 <div className=' m-2'>
//     //                   <label className='my-1' for="name">Name of Product</label>
//     //                   <input type="text" className='form-control' onChange={(e) => setProducts({ ...products, name: e.target.value })} value={products.name} />                      </div>
//     //                 <div className=' m-2'>
//     //                   <label className='my-1' for="price">Price</label>
//     //                   <input type="number" className='form-control' onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price} />
//     //                 </div>
//     //                 <div className=' m-2'>
//     //                   <label className='my-1' for="imageurl">Imageurl</label>
//     //                   <input type="text" className='form-control' onChange={(e) => setProducts({ ...products, imageurl: e.target.value })} value={products.imageurl} />
//     //                 </div>
//     //                 <div className=' m-2'>
//     //                   <label className='my-1' for="category">Category</label>
//     //                   <input type="text" className='form-control' onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category} />
//     //                 </div>
//     //               </div>
//     //             </form>


//     //             <button class="button-23" >
//     //               Close
//     //             </button>
//     //             {add ? (<button class="button-22 mx-2" role="button" variant="primary" onClick={addProduct}>
//     //               save
//     //             </button>) : <button variant="primary" onClick={updateProduct}>
//     //               save
//     //             </button>}
//     //     </Modal>
//     //   </div>



//     // </>
//   )
// }


// order Component
// function Order({ order, setOrder, setLoading }) {
//   // console.log(order)
//   const getOrdersData = async () => {
//     const q = query(
//       collection(fireDB, "orders"),
//       orderBy("date"),
//       // limit(50)
//     );
//     const data = onSnapshot(q, (QuerySnapshot) => {
//       let orderArray = [];
//       QuerySnapshot.forEach((doc) => {
//         orderArray.push({ ...doc.data(), id: doc.id });
//       });
//       setOrder(orderArray)
//     });

//     return () => data;

//   }


//   useEffect(() => {
//     getOrdersData()
//   }, [])

//   const context = useContext(allContext)
//   const { toggleMode, mode } = context
//   return (
//     <div>
//       <div className="relative overflow-x-auto">
//         <h1 className=' text-center mb-5 text-3xl font-semibold underline'>Order Details</h1>
//         {order.map((order) => {
//           console.log(order.addressInfo.nam)
//           return (
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//                 <tr>
//                   {/* <th scope="col" className="px-6 py-3">
//                     S.No
//                   </th> */}
//                   <th scope="col" className="px-6 py-3">
//                     Image
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Title
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Price
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Category
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Address
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Pincode
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Phone Number
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Email
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.cartItems.map((item) => {
//                   return (
//                     <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >

//                       <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
//                         <img className='w-16' src={item.imageUrl} alt="img" />
//                       </th>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {item.title}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         ₹{item.price}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {item.category}
//                       </td>
//                       {/* <td className="px-6 py-4 text-black ">
//                     {item.date}
//                   </td> */}
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.addressInfo.name}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.addressInfo.address}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.addressInfo.pincode}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.addressInfo.phoneNumber}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.email}
//                       </td>
//                       <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                         {order.addressInfo.date}
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           )
//         })}
//       </div>
//     </div>
//   )
// }


// function User({ addressInfo, setAddressInfo, setLoading }) {
//   // console.log(addressInfo)

//   const userData = async () => {
//     const q = query(
//       collection(fireDB, "orders"),
//       orderBy("date"),
//       // limit(50)
//     );
//     const data = onSnapshot(q, (QuerySnapshot) => {
//       let userArray = [];
//       QuerySnapshot.forEach((doc) => {
//         userArray.push({ ...doc.data(), id: doc.id });
//       });
//       setAddressInfo(userArray)
//     });

//     return () => data;

//   }

//   useEffect(() => {
//     userData()
//   }, []);
//   const context = useContext(allContext)
//   const { toggleMode, mode } = context
//   return (
//     <div>
//       <div className="relative overflow-x-auto">
//         <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 S.No
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Address
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Pincode
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Phone Number
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Email
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(addressInfo).map((i, index) => {
//               return (
//                 <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {index + 1}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].addressInfo.name}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].addressInfo.address}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].addressInfo.pincode}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].addressInfo.phoneNumber}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].email}
//                   </td>
//                   <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
//                     {addressInfo[i].addressInfo.date}
//                   </td>

//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }




export default AdminPanel

