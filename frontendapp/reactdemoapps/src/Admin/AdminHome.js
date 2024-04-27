import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css'
import config from '../config'
export default function AdminHome() {
  const [adminData, setAdminData] = useState(null);
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/analysis`);
      setCounts(response.data);
    } catch (error) {
      setError('');
    }
  };

  return (
    <div align='center' style={{ backgroundColor: 'white' }} >
      {adminData && (
        <div style={{alignContent:"center" ,backgroundColor: 'white'}}> 
          <h1><b>Welcome {adminData.username}!</b></h1>
          {counts ? (
            <div className="row" style={{ backgroundColor: 'white' }}>
              <div className="column"style={{ backgroundColor: 'white' }}>
                <div className="card"style={{ backgroundColor: 'white' }}>
                  <h3>Donars</h3>
                  <p>{counts.donarCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>NGOs</h3>
                  <p>{counts.ngoCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Donations</h3>
                  <p>{counts.donationCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Donators</h3>
                  <p>{counts.donatorsCount}</p>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}