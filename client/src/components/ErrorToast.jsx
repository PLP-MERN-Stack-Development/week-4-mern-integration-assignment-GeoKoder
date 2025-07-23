import React, { useEffect } from 'react';

const toastStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  backgroundColor: '#d32f2f',
  color: 'white',
  padding: '1rem 1.5rem',
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  zIndex: 1000,
};

const ErrorToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div style={toastStyle} role="alert" aria-live="assertive">
      {message}
      <button
        onClick={onClose}
        aria-label="Close error message"
        style={{
          marginLeft: 10,
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1.2rem',
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default ErrorToast;
