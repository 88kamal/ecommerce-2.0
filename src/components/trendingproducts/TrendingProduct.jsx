import React, { useContext } from 'react'
import ProductsTabs from '../trendingproducts/tab/ProductsTabs'
import allContext from '../../context/allContext/allContext'
function TrendingProduct() {
    const context = useContext(allContext)
    const {mode} = context
  return (
    <div className={`lg:p-10 md:p-10 py-5  ${mode==='dark'?"bg-[#2c3e50]":""}`}>
        <h1 className='text-2xl font-bold text-center mb-5' style={{color:mode==='dark'?'white':'black'}}>Trending Products</h1>
        <ProductsTabs/>
    </div>
  )
}

export default TrendingProduct