import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  textAlign: 'center',
  marginTop: '50px',
});

const WelcomeText = styled('h4')({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
});

const DonorHome = () => {
  const [donorData, setDonorData] = useState("");

  useEffect(() => {
    const storedDonorData = localStorage.getItem('donor');
    if (storedDonorData) {
      const parsedDonorData = JSON.parse(storedDonorData);
      // Capitalize donor data
      const capitalizedDonorData = {
        firstName: parsedDonorData.firstName.toUpperCase(),
        lastName: parsedDonorData.lastName.toUpperCase(),
        email: parsedDonorData.email.toUpperCase(),
        contact: parsedDonorData.contact.toUpperCase()
      };
      setDonorData(capitalizedDonorData);
    }
  }, []);
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
    
      <div className='home'>  
            <div class='hero'>
                <div class="hero-one"></div>
                <div class="hero-two"></div>
              
                <h1 class="header-title"><span class="header-primary"> hey! <br/>{donorData.firstName} {donorData.lastName}</span></h1>
                <p>
Welcome to our donation page! <br/>

Thank you for considering supporting our cause. Your generosity fuels our mission and directly impacts the lives of those we serve. Whether it's providing education, healthcare, or vital resources, every contribution makes a difference.</p>
                <button className='buttonhome' onClick={handleLoginClick}>Start Donating !!</button>
                
            </div>
        </div>
    
  );
}

export default DonorHome;
