// src/DropdownNotifications.js
import React, { useState, useEffect } from 'react';
import NotificationIcon from 'remixicon-react/Notification2LineIcon';
const notifications = [
  { id: 1, message: 'New comment on your post' },
  { id: 2, message: 'Your profile was updated' },
  { id: 3, message: 'You have a new follower' },
  { id: 4, message: 'Message from John Doe' },
];

const DropdownNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (event.target.closest('#dropdown') === null) {
      setIsOpen(false);
    }
  };
  return (
    <div className={dropdownDiv} id='dropdown'>
                    <NotificationIcon className="some-class" size={35} aria-expanded={isOpen}
        aria-haspopup="true" onClick={toggleDropdown}/>

                    {isOpen && (
                            <div style={dropdownStyle}>
                            {notifications.length > 0 ? (
                                notifications.map((notification) => (
                                <div key={notification.id} style={notificationStyle}>
                                    {notification.message}
                                </div>
                                ))
                            ) : (
                                <div style={notificationStyle}>No notifications</div>
                                )}
                            </div>
                        )}

                </div>
  );
};

// const buttonStyle = {
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   padding: '10px 20px',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };

const dropdownDiv = {
  position: 'relative', 
  display: 'inline-block'
}

const dropdownStyle = {
  position: 'absolute',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  width: '200px',
  zIndex: 1000,
};

const notificationStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  cursor: 'pointer',
};

export default DropdownNotifications;
