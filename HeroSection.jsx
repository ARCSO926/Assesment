import React from 'react';

const Hero = () => {
  const handleShopNow = () => {
    alert('Exploring daily essentials and hot deals!');
  };

  return (
    <div style={{ padding: '20px 40px', backgroundColor: '#ffffff' }}>
      <div style={{
        backgroundColor: '#edf7ed',
        borderRadius: '20px',
        padding: '50px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        backgroundImage: 'linear-gradient(135deg, #edf7ed 0%, #f7fee7 100%)',
        border: '1px solid #dcfce7'
      }}>
        <div style={{ maxWidth: '550px' }}>
          <span style={{ backgroundColor: '#ffedd5', color: '#ea580c', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>
            SAVE UP TO 30% OFF
          </span>
          <h1 style={{ color: '#14532d', fontSize: '2.8rem', margin: '15px 0 10px 0', fontWeight: '800', lineHeight: '1.2' }}>
            Stock up on your daily essentials
          </h1>
          <p style={{ color: '#166534', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.5' }}>
            Get farm-fresh goodness, groceries, and premium lifestyle electronics delivered right to your doorstep.
          </p>
          <button 
            onClick={handleShopNow}
            style={{
              padding: '14px 35px',
              backgroundColor: '#0c831f',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0px 4px 10px rgba(12, 131, 31, 0.2)'
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ fontSize: '7rem', marginRight: '40px', userSelect: 'none' }}>
          🧺
        </div>
      </div>
    </div>
  );
};

export default Hero;