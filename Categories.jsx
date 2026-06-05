import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Dairy & Bread', icon: '🥛' },
    { name: 'Fruits & Veggies', icon: '🍎' },
    { name: 'Snacks & Munchies', icon: '🍿' },
    { name: 'Smart Electronics', icon: '🎧' },
    { name: 'Personal Care', icon: '🧼' },
    { name: 'Household Items', icon: '🧹' }
  ];

  const handleCategoryClick = (name) => {
    alert(`Opening category: ${name}`);
  };

  return (
    <div style={{ padding: '30px 40px', fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
      <h3 style={{ color: '#1e293b', fontSize: '1.4rem', marginBottom: '20px', fontWeight: '700' }}>Browse Categories</h3>
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px' }}>
        {categories.map((cat, index) => (
          <div 
            key={index} 
            onClick={() => handleCategoryClick(cat.name)}
            style={{
              flex: '0 0 auto',
              padding: '15px 25px',
              backgroundColor: '#f8fafc',
              border: '1px solid #f1f5f9',
              borderRadius: '16px',
              cursor: 'pointer',
              textAlign: 'center',
              width: '120px',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{cat.icon}</div>
            <div style={{ color: '#334155', fontSize: '0.9rem', fontWeight: '600' }}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;