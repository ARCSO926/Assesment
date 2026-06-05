import React from 'react';

const Navbar = () => {
  const handleLoginClick = () => {
    alert('Login popup coming soon!');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2 style={{ color: '#0c831f', margin: 0, fontFamily: 'sans-serif', fontWeight: '800', letterSpacing: '0.5px' }}>
          neiro<span style={{ color: '#ffc72c' }}>store</span>
        </h2>
      </div>
      
      <div style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder='Search "milk", "butter" or "electronics"...' 
          style={{
            width: '100%',
            padding: '11px 15px',
            borderRadius: '10px',
            border: '1px solid #f1f5f9',
            backgroundColor: '#f8fafc',
            outline: 'none',
            fontSize: '0.95rem'
          }}
        />
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
        color: '#1e293b',
        fontWeight: '500'
      }}>
        <li style={{ cursor: 'pointer' }}>Home</li>
        <li style={{ cursor: 'pointer' }}>Categories</li>
        <li style={{ cursor: 'pointer' }}>Offers</li>
      </ul>

      <button 
        onClick={handleLoginClick}
        style={{
          padding: '10px 24px',
          backgroundColor: '#0c831f',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.95rem'
        }}
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;