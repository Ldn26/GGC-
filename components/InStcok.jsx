import React from "react";
import WorkCard from "./WorkCard.jsx";

export default function InStock() {
  const dummyItems = Array(12).fill({
    title: "PET",
    category: "Dechet",
    count: 10,
    volume: 1,
    price: 120,
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 16,
      }}
    >
      {dummyItems.map((item, idx) => (
        <WorkCard
          key={idx}
          title={item.title}
          category={item.category}
          count={item.count}
          volume={item.volume}
          price={item.price}
        />
      ))}
    </div>
  );
}
