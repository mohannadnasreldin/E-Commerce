import React, { useEffect } from 'react';
import './App.css';
import Footer from '../../components/footer/Footer.jsx';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  useEffect(() => {
    // Check if user is logged in before setting up the session timer
    if (!localStorage.getItem('token')) {
      return;
    }

    let inactivityTimer;
    const sessionTimeout = 1 * 60 * 1000; // 1 minute in milliseconds

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(logout, sessionTimeout);
    };

    const logout = () => {
      axios.get('http://localhost:5000/authentication/logout', {
        headers: {
          authorization: localStorage.getItem('token'),
        }
      })
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        window.location.reload();
      })
      .catch(error => {
        console.error('Logout error:', error);
        // Handle logout error gracefully
      });
    };

    resetTimer();

    // Add event listeners to reset the timer on user activity
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    activityEvents.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    // Clear the timers and event listeners on component unmount
    return () => {
      clearTimeout(inactivityTimer);
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);
  if(localStorage.getItem('type') === 'admin') {
    return window.location.href = '/login';
  }
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
