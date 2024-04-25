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
      setDonorData(parsedDonorData)
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
    <Container>
      {donorData && (
        <div>
          <WelcomeText>Welcome {donorData.email}</WelcomeText>
        </div>
      )}
      <div className='home'>  
            <div class='hero'>
                <div class="hero-one"></div>
                <div class="hero-two"></div>
                <h1 class="header-title"><span class="header-primary">DONATE TO SAVE LIVES</span></h1>
                <p>Join our community dedicated to supporting and uplifting elders! Through various initiatives and programs, we create a nurturing environment that promotes their well-being, and overall quality of life.</p>
                <button className='buttonhome' onClick={handleLoginClick}>Start Donating !!</button>
                
            </div>
        </div>
    </Container>
  );
}

export default DonorHome;
