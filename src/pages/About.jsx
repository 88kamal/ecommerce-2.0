import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import allContext from '../context/allContext/allContext'

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const context = useContext(allContext)
    const { toggleMode, mode } = context
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-16">
                <div className="logo flex justify-center">
                    <img className=' w-20 mb-5' src="img/logot.png" alt="" />
                </div>
                <h1 style={{ color: mode === 'dark' ? 'white' : '' }} className=' text-center text-3xl mb-7 font-bold'>Welcome To E-Bharat.com</h1>
                <p className=' text-justify' style={{ color: mode === 'dark' ? 'white' : '' }}>Introducing E-bharat, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of NextJs and MongoDB, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech enthusiast or simply looking for a stylish geek T-shirt, E-bharat has something for everyone. And for those curious about the development process, be sure to check out the CodeWithHarry NextJs playlist on YouTube. Shop now at E-bharat and experience the future of online shopping.</p>

                <div className=" text-center">
                    <button className=' bg-pink-600 px-8 py-2 rounded-xl text-white font-semibold'>Start Shopping</button>

                </div>


                <div className="about">
                    <div className="left">
                        <p  className=' text-justify' style={{ color: mode === 'dark' ? 'white' : '' }}>
                          <h1 className=' text-2xl font-bold mb-2'>  About E-bharat</h1>
                            E-bharat.com is revolutionizing the way India shops for unique, geeky apparel. From our one-of-a-kind hoodie designs to our wide selection of stickers, mugs and other accessories, we have everything you need to express your individuality and stand out from the crowd. Say goodbye to the hassle of hopping from store to store in search of your perfect geeky look. With just a single click on our website, you can find it all!
<br />
<br />
                            But what sets E-bharat apart from the competition? The answer is simple: our unique designs and commitment to providing the highest quality products. We understand the importance of style and durability, which is why we put so much effort into creating unique designs and using only the best materials. Don't settle for mediocre clothing and accessories - choose E-bharat and make a statement with your wardrobe.
<br />
<br />
                            At E-bharat, we strive to be more than just an online store - we want to be a community where like-minded individuals can come together and express themselves through fashion. Whether you're a gamer, a programmer, or simply someone who loves all things geeky, we have something for you. Our collection is curated with the latest trends and fan favorites in mind, ensuring that you'll always find something new and exciting.

                            We also understand the importance of affordability and convenience. That's why we offer competitive prices and fast shipping, so you can get your hands on your new geeky apparel as soon as possible. Plus, with our easy-to-use website and secure checkout process, shopping with us is a breeze.

                            So why wait? Visit E-bharat.com today and discover the latest in geeky fashion. With our unique designs and high-quality products, we're sure you'll find something you'll love. Join our community and express your individuality through fashion.
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default About