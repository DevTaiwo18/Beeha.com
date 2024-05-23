import React, { useEffect, useState } from 'react';

const AlertMessage = ({ status, message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();  
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!visible) return null;

  const alertClasses = `fixed top-5 right-5 px-4 py-2 rounded shadow-md transition-transform duration-300 ease-in-out transform ${
    visible ? 'translate-y-0' : 'translate-y-4 opacity-0'
  } ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white text-sm flex items-center`;

  return (
    <div className={alertClasses} style={{ zIndex: 9999 }}>
      <span className="flex-1 text-center ml-2 md:ml-3 text-xs md:text-sm">{message}</span>
      <button
        className="ml-2 md:ml-4 text-lg font-bold focus:outline-none"
        onClick={() => {
          setVisible(false);
          onClose();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default AlertMessage;
