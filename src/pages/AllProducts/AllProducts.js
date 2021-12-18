import React from 'react'
import './AllProducts.css'


function AllProducts() {
    return (
        <div className="allProducts"> 
            <div className="filters-conatiner">
                <div className="filters">
                    <p style={{fontWeight: '500', fontSize:'1.5em'}}>Filters</p>
                </div>
                <div className="price">
                    <p>PRICE</p>
                    <div className="price-slider">

                    </div>
                    <div className="price-range">

                    </div>
                </div>
                <div className="brand">
                    <p>BRAND</p>
                    <label class="container">Samsung
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Realme
                        <input type="checkbox" /> 
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="rating">
                    <p>CUSTOMER RATING</p>
                    <label class="container">4★ & above
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">3★ & above
                        <input type="checkbox" /> 
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="discount">
                    <p>DISCOUNT</p>
                    <label class="container">10% or more
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">10% or more
                        <input type="checkbox" /> 
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="results">
                <div className="result-container">
                    <div className="result-container-top">
                        <p>Home{'>'}Mobiles</p>
                    </div>
                    <div className="result-container-down">
                        <p>Showing 10 results for mobiles</p>
                    </div>
                </div>

                <div className="result-card">
                    <div className="result-card-left">
                        <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/h/u/u/c21y-rmx3261-realme-original-imag65kcafgjqknz.jpeg?q=70" alt="realme" />
                    </div>
                    <div className="result-card-mid">
                        <div className="result-card-mid-up">
                            <p>realme C21Y (Cross Black, 32 GB) </p>
                            <div className="rate-block">
                                <div className="rate-star">
                                    4.5★
                                </div>
                                <p>23,232 Rating & 734 Reviews</p>
                            </div>
                        </div>
                        <div className="result-card-mid-down">
                            <ul>
                                <li>3 GB RAM | 32 GB ROM | Expandable Upto 256 GB </li>
                                <li>16.51 cm (6.5 inch) HD+ Display</li>
                                <li>13MP + 2MP + 2MP | 5MP Front Camera</li>
                                <li>5000 mAh Battery</li>
                                <li>Unisoc T610 Processor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="result-card-right">
                        <div className="result-card-right-box">
                            <p>₹8,999</p>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="fAssured" />
                        </div>
                        
                        <div className="">
                            <p>₹9,99</p>
                            <p>10% off</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
