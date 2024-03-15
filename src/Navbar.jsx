// Navbar.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from './assets/vmart.jpg';
import locationpin from './assets/geo-alt-fill.svg';
import './Navbar.css'; // Import custom CSS for Navbar styling

function Navbar(props) {
  const [location, setLocation] = useState('Vellore');
  const [area, setArea] = useState('632014');

  const handleUpdateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Simulate location retrieval for demonstration purposes
        // In a real application, you would use a reverse geocoding service
        // to obtain location information based on latitude and longitude
        setLocation('Vellore');
        setArea('632014');
      }, (error) => {
        console.error('Error getting geolocation:', error.message);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url('../navbar_gradient.jpeg')`, color: '#fff' }}>
      <img src={logo} height={'70px'} width={"70px"} style={{borderRadius:"50%", marginRight: '10px' }}/>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: '#fff' }}>VMart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div style={{marginLeft:"15%", width:"100%"}}>
                <p className="nav-link active" aria-current="page" style={{marginBottom:"0px", paddingBottom:"1px", color: '#fff' }}>Deliver to <b style={{color:'yellow'}}>{location}, {area}</b></p>          
                <p className="" onClick={handleUpdateLocation} style={{ cursor: 'pointer', color: '#fff' }}><img src={locationpin} alt="locationpin" style={{ cursor: 'pointer', marginTop: '5px' }}/><u><b style={{ marginLeft: '5px' }}>Update Location</b></u></p>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <a href='/login'><button className="btn btn-success" type="login" style={{marginLeft:"5%"}}>Login/Signin</button></a>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  // Add propTypes if needed
};

export default Navbar;
