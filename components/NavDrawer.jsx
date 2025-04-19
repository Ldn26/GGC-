"use client";

import React from "react";

export default function NavDrawer({ selectedIndex, onItemSelected }) {
  const items = [
    "Dashboard",
    "Shop",
    "Stock",
    "Invoices",
    "Notification",
    "Help & Center",
    "Log Out",
  ];

  const icons = [
    "📊", // Dashboard
    "🛒", // Shop
    "🏬", // Stock
    "🧾", // Invoices
    "🔔", // Notification
    "💰", // Finances
    "❓", // Help
    "⚙️", // Settings
    "🚪", // Logout
  ];

  const drawerStyle = {
    width: 450,
    height: "100vh",
    backgroundColor: "#0D4715",
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    padding: "20px 0",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  };

  const itemStyle = (isSelected) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    cursor: "pointer",
    backgroundColor: isSelected ? "#DDEB9D" : "transparent",
    color: isSelected ? "#000000" : "#aaa",
    fontWeight: isSelected ? "bold" : "normal",
  });

  const iconStyle = {
    marginRight: 12,
    fontSize: 18,
  };

  return (
    <div style={drawerStyle} >
      <div style={headerStyle}>Dashboard</div>
      {items.map((label, index) => {
        const isSelected = selectedIndex === index;
        return (
          <div
            key={index}
            style={itemStyle(isSelected)}
            onClick={() => onItemSelected(index)}
          >
            <span style={iconStyle}>{icons[index]}</span>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
