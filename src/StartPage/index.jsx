import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Button } from '@mui/material';
import logo from '../Assets/logo.png';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Landing/Dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = {
    container: {
      // backgroundImage: 'url("https://meaningfullyorganized.com/wp-content/uploads/2016/11/mandalay-bay-retail-resort-shops-shopping-bags.jpg")', // Replace with your background image URL
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      background: 'linear-gradient(to right, #114357, #f29492)',
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-cover bg-center text-white" style={styles.container}>
      <div className="d-flex">
        <div>
          {/* <h1 className="display-1 fw-bold" style={{ color: 'white' }}>Phantasm</h1> */}
          <img src={logo} style={{ width: '200px', height: 'auto' }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
