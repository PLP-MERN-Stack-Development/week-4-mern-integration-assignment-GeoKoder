import React from 'react';

const spinnerStyle = {
  display: 'inline-block',
  width: 40,
  height: 40,
  border: '4px solid rgba(63, 81, 181, 0.2)',
  borderRadius: '50%',
  borderTopColor: '#3f51b5',
  animation: 'spin 1s linear infinite',
  margin: '1rem auto',
};

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={spinnerStyle} />
    <style>
      {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default LoadingSpinner;
