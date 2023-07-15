import React from 'react'
import TopNavbar from './TopNavbar'
import Footer from './Footer'
import Loader from './Loader'
import FooterMob from './footer/FooterMob'
import FooterDes from './footer/FooterDesc'

function Layout(props) {
  return (
    <div>
      {
        props.loading && (<Loader/>)
      }
        <TopNavbar/>
        <div className="content">
            {props.children}
        </div>
        <Footer/>
        {/* <FooterMob/>
        <FooterDes/> */}
    </div>
  )
}

export default Layout