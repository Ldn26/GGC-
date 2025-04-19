import React from "react";

export default function WorkCard({
  title,
  category,
  count,
  volume,
  price,
  isCompleted = false,
  isPending = false,
  isTarget = false,
}) {
  let cardColor = "#f0f0f0";
  if (isCompleted) cardColor = "#d4edda";
  if (isPending) cardColor = "#ffeeba";
  if (isTarget) cardColor = "#cce5ff";

  return (
    <div
      style={{
        backgroundColor: cardColor,
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontStyle: "italic" }}>- {category}</p>
      <p>Regression count: {count}</p>
      <p>Last updated: {volume} kg</p>
      <p>Price: {price} da</p>
    </div>
  );
}
