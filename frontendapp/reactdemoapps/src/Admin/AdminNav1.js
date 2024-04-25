// NavBar.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import DonorNavBar from './DonorNavBar'; // Import DonorNavBar

import Contact from '../Main/Contact';
import DonorLogin from '../Donator/DonorLogin';
import Registration from '../Donator/Registration';
import AdminLogin from '../Admin/AdminLogin';
import Donate from '../Donator/Donate';
// import AdminView from '../Admin/AdminView';
import DonorProfile from '../Donator/DonorProfile'
import DonorTrans from '../Donator/DonorTrans'
import DonorHome from '../Donator/DonorHome'
import Home from '../Main/Home'
import AdminNavBar from './AdminNavBar';
import AdminView from '../Admin/AdminView';
import ViewTrans from '../Admin/ViewTrans';
import AdminHome from '../Admin/AdminHome'
import AdminProfile from '../Admin/AdminProfile'

const AdminNav1 = () => {
  return (
    <div>
      <AdminNavBar/>{/* Render DonorNavBar component here */}
      <Routes>
        <Route path="/" element={<AdminHome/>} />
        <Route path="/adminhome" element={<AdminHome/>} />

        <Route path="/donators" element={<AdminView/>} />
        <Route path='/adminprofile' element={<AdminProfile/>}/>
        <Route path='/donortrans' element={<ViewTrans/>}/>
        <Route path='/logout' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default AdminNav1;
