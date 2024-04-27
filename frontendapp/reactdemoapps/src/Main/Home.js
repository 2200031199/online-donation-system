import React from 'react';
import  './home.css';
import config from '../config';

const Home = () => {
    const myStyle = {
        backgroundImage: "url('/donate1.jpg')", // Assuming donate1.jpg is directly inside the public folder
        height: "100vh",
        marginTop: "-50px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
    };
    
    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3000/donorlogin';
    };
    
    return (
        
        <div className='home-page'>  
            <div class='hero'>
                <div class="hero-one"></div>
                <div class="hero-two"></div>
                <h1 class="header-title"><span class="header-primary" >DONATE NOW!</span></h1>
                <p>Your Contributions can change our lives
                    </p><br/>
                <button className='buttonhome' onClick={handleLoginClick}>Login to the Donor Community</button>
                
            </div>
        </div>
    );
    
    
}



export default Home;
