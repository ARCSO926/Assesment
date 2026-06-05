import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: 'Rohan Sharma', text: 'Neiro store delivers everything under 15 minutes. Super reliable for fresh milk and morning snacks.' },
    { name: 'Anjali Gupta', text: 'Extremely clean UI layout. Ordering vegetables and lifestyle items together is very convenient.' }
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h3 style={{ color: '#1e293b', marginBottom: '25px', fontSize: '1.4rem', fontWeight: '700' }}>What Our Community Says</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
        {reviews.map((review, index) => (
          <div key={index} style={{
            flex: '1',
            minWidth: '280px',
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #f1f5f9',
            textAlign: 'left',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
          }}>
            <p style={{ color: '#475569', margin: '0 0 15px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>"{review.text}"</p>
            <h5 style={{ color: '#1e293b', margin: 0, fontSize: '0.9rem', fontWeight: '700' }}>{review.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;