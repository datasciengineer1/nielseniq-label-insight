import React from 'react';

const TestAttributes = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'red', fontSize: '2rem' }}>🎨 VISUAL TEST - Can you see this red text?</h2>
      
      <div style={{ 
        width: '300px', 
        height: '50px', 
        backgroundColor: 'blue', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '20px 0'
      }}>
        Blue Box Test
      </div>

      <div style={{ 
        width: '100%', 
        height: '20px', 
        backgroundColor: '#e5e7eb', 
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <div style={{
          width: '75%',
          height: '100%',
          backgroundColor: '#10b981',
          borderRadius: '10px'
        }}></div>
      </div>

      <p style={{ color: 'green', fontWeight: 'bold' }}>
        ✅ If you can see colors and shapes above, visual rendering works!
      </p>
    </div>
  );
};

export default TestAttributes;
