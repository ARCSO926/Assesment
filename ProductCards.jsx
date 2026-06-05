import React from 'react';

const ProductCards = () => {
  const products = [
    { 
      id: 1, 
      name: 'Amul Fresh Masti Dahi', 
      price: '₹35', 
      qty: '400 g',
      time: '12 MINS',
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&auto=format&fit=crop&q=60' 
    },
    { 
      id: 2, 
      name: 'Farm Fresh Banana Robusta', 
      price: '₹50', 
      qty: '1 kg (Approx 6-8 pcs)',
      time: '10 MINS',
      img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop&q=60' 
    },
    { 
      id: 3, 
      name: 'Premium Wireless Headphones', 
      price: '₹1,999', 
      qty: '1 Unit',
      time: '15 MINS',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=60' 
    },
    { 
      id: 4, 
      name: 'Crispy Potato Chips (Salted)', 
      price: '₹20', 
      qty: '100 g',
      time: '12 MINS',
      img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&auto=format&fit=crop&q=60' 
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to your cart successfully! 🛒`);
  };

  return (
    <div style={{ padding: '30px 40px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h3 style={{ color: '#1e293b', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Trending Products</h3>
        <span style={{ color: '#0c831f', fontWeight: '600', cursor: 'pointer' }}>see all</span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '24px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              {/* Delivery Timer Badge */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                backgroundColor: '#ffffff',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontWeight: '700',
                color: '#64748b',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                ⏱️ {product.time}
              </div>

              {/* Image */}
              <div style={{ 
                height: '150px', 
                backgroundColor: '#f8fafc', 
                borderRadius: '12px', 
                marginBottom: '12px',
                backgroundImage: `url(${product.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />

              {/* Title & Info */}
              <h4 style={{ color: '#1e293b', margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.4' }}>{product.name}</h4>
              <p style={{ color: '#64748b', fontSize: '0.8rem', margin: '0 0 16px 0' }}>{product.qty}</p>
            </div>

            {/* Bottom Row containing Price and Action Button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>{product.price}</span>
              <button 
                onClick={() => handleAddToCart(product.name)}
                style={{
                  padding: '6px 22px',
                  backgroundColor: '#ffffff',
                  color: '#0c831f',
                  border: '1px solid #0c831f',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  backgroundColor: '#f3fbf4'
                }}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;