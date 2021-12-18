import React from 'react'
import Bottom from '../Bottom/Bottom'
import Navbar from '../Navbar/Navbar'
import NavCard from '../NavCard/NavCard'
import './Home.css'

import CartLogo1 from './cart-logo.png';

const HomeProductCard = ({productName, productPrice, productBrand,productImgSrc}) => {
    return(
        <div className="homeProductCard">
            <div className="homeProductCard-img">
                <img src={productImgSrc} alt={productName} width='40%'/>
            </div>
            <div className="homeProductCard-description">
                <p>{productName}</p>
                <p>₹{productPrice}</p>
                <p>{productBrand}</p>
            </div>
        </div>
    );
}
const ProductsCard = ({title,}) => {
    return (
        <div className="productsCard">
            <div className="productsCard-left">
                <div className="productsCard-left-up">
                    <p>{title}</p>
                    <div className="button">
                        <p>VIEW ALL</p>
                    </div>
                </div>
                
                <div className="productsCard-left-down">
                    <img src={CartLogo1} alt="cart" />
                </div>
            </div>
            <div className="productsCard-right">
                <HomeProductCard
                productName="SAMSUNG Galaxy Z Flip3 5G"
                productPrice="84,999"
                productBrand="SAMSUNG"
                productImgSrc="https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
                />
            </div>
        </div>
    );
}
function Home() {
    return (
        <div>
            <Navbar />
            <NavCard />
            <div className="body">
                <ProductsCard 
                title="Top Offers on Mobiles"
                />
            </div>
            
            <Bottom  />
        </div>
    )
}

export default Home
