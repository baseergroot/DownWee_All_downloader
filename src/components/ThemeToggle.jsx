import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-switch" 
        checked={darkMode} 
        onChange={toggleTheme} 
      />
      <label htmlFor="theme-switch" className="toggle-label">
        <span className="toggle-button"></span>
        <span className="icon sun">☀️</span>
        <span className="icon moon">🌙</span>
      </label>
    </div>
  );
};

export default ThemeToggle;