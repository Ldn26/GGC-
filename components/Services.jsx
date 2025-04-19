import React from 'react';

export default function Services({ title, description }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 6,
  };

  const descriptionStyle = {
    fontSize: 14,
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
}