import React from 'react';
import PasswordProtection from '../components/PasswordProtection';

export default function Root({children}) {
  return (
    <PasswordProtection>
      {children}
    </PasswordProtection>
  );
}
