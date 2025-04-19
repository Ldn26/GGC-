import React from 'react';
import DashboardCard from './DashboardCard';
import DashboardS from "../components/DashbardS";
import InvoiceList from './InvoiceList';
export default function Dashboard() {
  const invoices = [
    {
      id: '1',
      customer: 'Eren Yeager',
      item: 'Black Backpack',
      date: '2022-07-21',
      status: 'Paid',
      price: 101,
      statusColor: 'green',
    },
    {
      id: '2',
      customer: 'Levi Ackerman',
      item: 'Distro Backpack',
      date: '2022-07-21',
      status: 'Pending',
      price: 144,
      statusColor: 'orange',
    },
  ];

  return (
    <div style={{ overflowY: 'auto', padding: 20 }}>
      {/* Top Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 18, fontWeight: 700 }}>Welcome Back,</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/images/profileImage.jpeg"
            alt="Profile"
            style={{ width: 33, height: 33, borderRadius: '50%' }}
          />
          <span style={{ fontSize: 15, fontWeight: 500 }}>Society Plastic</span>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div style={{ display: 'flex', marginTop: 20, gap: 16 }}>
        <DashboardCard title="Customers" value="1,456" change="+6.5%" changeColor="green" />
        <DashboardCard title="Revenue" value="$3,345" change="-0.10%" changeColor="red" />
        <DashboardCard title="Profit" value="60%" change="-0.2%" changeColor="red" />
        <DashboardCard title="Invoices" value="1,135" change="+11.5%" changeColor="green" />
      </div>

  

      {/* Stats Section */}
      <h3 style={{ marginTop: 30, fontSize: 18, fontWeight: 700 }}>My Stats</h3>
      <div style={{ marginTop: 20 }}>
        <DashboardS />
      </div>

      {/* Customers/Invoices */}
      <h3 style={{ marginTop: 30, fontSize: 18, fontWeight: 700 }}>My Customers</h3>
      <div style={{ marginTop: 10 }}>
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  )}