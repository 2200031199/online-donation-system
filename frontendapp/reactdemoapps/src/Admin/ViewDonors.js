import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'
import config from '../config';

export default function ViewDonors() {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get(`${config.url}/viewdonors`);
      setDonors(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchDonors();
  }, []);

  const deleteDonors = async (email) => {
    try {
      await axios.delete(`${config.url}/${email}`);
      fetchDonors();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Donors</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(donors) && donors.length > 0 ? (
    donors.map((donor, index) => (
      <tr key={index}>
        <td>{donor.fullname}</td>
        <td>{donor.gender}</td>
        <td>{donor.dateofbirth}</td>
        <td>{donor.email}</td>
        <td>{donor.location}</td>
        <td>{donor.contact}</td>
        <td>
          <button onClick={() => deleteDonors(donor.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}