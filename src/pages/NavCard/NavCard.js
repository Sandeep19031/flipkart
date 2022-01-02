import React from 'react'
import { Link } from 'react-router-dom';
import './NavCard.css'

const Card = ({src,type}) => {
    return (
        <Link to={`allProducts/${type}`} style={{textDecoration: 'none', color: 'black'}}> 
        <div className="Card" >
            <img src={src} className ="card-img" alt="mobile" />
            <p>{type}</p>
        </div>
        </Link>
    );
}
function NavCard() {
    return (
        <div className="navcard">
            <Card 
            src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100"
            type="Mobiles"
            />
            <Card 
            src= "https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100"
            type="Fashion"
            />
            <Card 
            src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100"
            type="Electronics"
            />
            <Card 
            src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100"
            type="Home"
            />
            <Card 
            src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100"
            type="Appliances"
            />
            <Card
            src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100"
            type="Beauty,Toys & more"
            />
            <Card
            src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100"
            type="Grocery"
            />
        </div>
    )
}

export default NavCard
