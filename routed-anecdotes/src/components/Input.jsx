import React from 'react';

export default function Input({ type, value, onChange }) {
  return <input type={type} value={value} onChange={onChange} />;
}
