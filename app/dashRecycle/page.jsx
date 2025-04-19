"use client";

import React, { useState } from "react";
import NavDrawer from "../../components/NavDrawer"; // adjust path accordingly
import { Line } from "react-chartjs-2";
import { useRouter } from "next/navigation";
import DashPage from "../../components/DashPage";
import Shoping from "../../components/Shoping"
import InvoiceList, { Invoice } from "../../components/InvoiceList";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


import HelpCenter from "../../components/HelpCenter";

import StockApp from '../../components/Stock'

const invoices = [
  new Invoice({
    id: 1,
    customer: "Alice",
    item: "Laptop",
    date: "2024-03-01",
    status: "Paid",
    price: 1200,
    statusColor: "green",
  }),
  new Invoice({
    id: 2,
    customer: "Bob",
    item: "Keyboard",
    date: "2024-03-05",
    status: "Unpaid",
    price: 80,
    statusColor: "red",
  }),
  new Invoice({
    id: 3,
    customer: "Charlie",
    item: "Monitor",
    date: "2024-03-10",
    status: "Overdue",
    price: 250,
    statusColor: "orange",
  }),
];
function Card({ title, value, change, changeColor }) {
  return (
    <div className="border rounded-lg p-4 min-w-[180px] shadow-sm">
      <h4>{title}</h4>
      <div className="text-lg font-bold">{value}</div>
      <div style={{ color: changeColor }}>{change}</div>
    </div>
  );
}

function CircleStat({ value, percentage }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-full border-[6px] border-blue-200 flex items-center justify-center font-bold">
        {percentage}%
      </div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-gray-500">Invoices</div>
    </div>
  );
}

const stats = {
  growthPercentage: 40,
  totalInvoices: 1135,
  totalPaid: 234,
  totalOverdue: 514,
  totalUnpaid: 345,
  monthlySales: [
    2000, 4000, 6000, 8000, 10000, 8500, 7000, 9500, 11500, 9000, 8000, 12000,
  ],
};






export default function DashboardLayout() {

const router = useRouter();


  const handelLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  
  
  // Pages can be rendered via function to avoid JSX outside of a component
  function renderPage(index) {
    switch (index) {
      case 0:
        return <DashPage />;
      case 1:
        return <Shoping />;
      case 2:
        return <StockApp />;
      case 3:
        return <InvoiceList invoices={invoices} />;
      case 5:
        return <HelpCenter /> ;
      case 6:
        return handelLogout();
      default:
        return <div className="p-4">Page not implemented yet</div>;
    }
  }
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full flex h-screen overflow-hidden">
      <NavDrawer
        selectedIndex={selectedIndex}
        onItemSelected={(index) => setSelectedIndex(index)}
      />
      <div className="flex-1 overflow-auto">
        {renderPage(selectedIndex)}

      </div>
    </div>
  );
}
