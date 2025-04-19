import React from 'react';

export default function DashboardCard({ title, value, change, changeColor }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
  };

  const titleStyle = {
    fontSize: 14,
    color: '#555',
  };

  const valueStyle = {
    fontSize: 18,
    fontWeight: 'bold',
  };

  const changeStyle = {
    color: changeColor,
    fontSize: 14,
    fontWeight: '500',
  };

  return (
    <div style={cardStyle}>
      <div>
        <div style={titleStyle}>{title}</div>
        <div style={valueStyle}>{value}</div>
      </div>
      <div style={changeStyle}>{change}</div>
    </div>
  );
}