import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem('authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password: "mates2025" - change this to your preferred password
    if (password === 'mates2025') {
      sessionStorage.setItem('authenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={styles.passwordContainer}>
      <div className={styles.passwordBox}>
        <h1>🔒 Practical AI for Mates</h1>
        <p>This content is password protected.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={styles.passwordInput}
            autoFocus
          />
          <button type="submit" className={styles.submitButton}>
            Enter
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.hint}>
          Contact Ollie Ayton (<a href="mailto:ollie@aytonlabs.io">ollie@aytonlabs.io</a>) for access
        </p>
      </div>
    </div>
  );
};

export default PasswordProtection;
