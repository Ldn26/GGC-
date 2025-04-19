import React from "react";
import { Line } from "react-chartjs-2";
// Sample Data
const stats = {
  growthPercentage: 22.4,
  totalInvoices: 1135,
  totalPaid: 234,
  totalOverdue: 514,
  totalUnpaid: 345,
  monthlySales: [
    2000, 4000, 6000, 8000, 10000, 8500, 7000, 9500, 11500, 9000, 8000, 12000,
  ],
  currentRevenue: 11500,
};

export default function DashboardS() {
  return (
    <div style={{ marginTop: 20 }}>
      {/* Growth Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 16 }}
          >
            <PercentageIndicator percentage={stats.growthPercentage} />
            <div>
              <div style={{ fontSize: 28, fontWeight: "bold" }}>
                {stats.totalInvoices}
              </div>
              <div style={{ color: "gray" }}>
                {index === 0 ? "PEET Dechet" : "Invoices"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 16,
          marginTop: 30,
        }}
      >
        <StatsCard title="Total Paid" value={stats.totalPaid} color="green" />
        <StatsCard
          title="Total Overdue"
          value={stats.totalOverdue}
          color="orange"
        />
        <StatsCard title="Total Unpaid" value={stats.totalUnpaid} color="red" />
      </div>

      {/* Analytics Section */}
      <h3 style={{ marginTop: 40, fontWeight: "bold" }}>Sales Analytics</h3>
      <LineChartWidget
        data={stats.monthlySales}
        currentValue={stats.currentRevenue / 1000}
      />
    </div>
  );
}

// PercentageIndicator component
function PercentageIndicator({ percentage }) {
  const circleSize = 60;
  return (
    <div
      style={{ position: "relative", width: circleSize, height: circleSize }}
    >
      <svg width={circleSize} height={circleSize}>
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleSize / 2 - 6}
          fill="none"
          stroke="#eee"
          strokeWidth="6"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleSize / 2 - 6}
          fill="none"
          stroke={percentage >= 0 ? "green" : "red"}
          strokeWidth="6"
          strokeDasharray={`${
            (percentage / 100) * 2 * Math.PI * (circleSize / 2 - 6)
          } 999`}
          transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: circleSize,
          height: circleSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        {percentage.toFixed(1)}%
      </div>
    </div>
  );
}

// StatsCard component
function StatsCard({ title, value, color }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ fontSize: 14, color: "#666" }}>{title}</div>
      <div style={{ fontSize: 20, fontWeight: "bold", color }}>{value}</div>
    </div>
  );
}

// LineChartWidget component













function LineChartWidget({ data, currentValue, chartHeight = 250, chartWidth = '50%' }) {
  const chartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data,
        borderColor: "blue",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 24, fontWeight: "bold" }}>
        ${currentValue.toFixed(1)}K
      </div>
      <div style={{ height: chartHeight, width: chartWidth }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } },
          }}
        />
      </div>
    </div>
  )


}

