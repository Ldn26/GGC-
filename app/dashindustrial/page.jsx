"use client";

import React, { useState ,useEffect } from "react";
import NavDrawer from "../../components/NavDrawer"; // adjust path accordingly
import { useRouter } from "next/navigation";
import DashPage from "../../components/DashPage";
import InvoiceList, { Invoice } from "../../components/InvoiceList";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
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

const formations = [
  {
    id: 1,
    category: "University",
    name: "Front-end & Back-end Development",
    companyName: "Sonatrach",
    field: "Computer Science",
    describtion:
      "Learn basics of app development and create your first project.",
    location: "Setif",
    price: 5000,
    duration: 12,
    places: 15,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    category: "Hotel",
    name: "Hotel Management Training",
    companyName: "Hilton",
    field: "Hospitality",
    describtion: "Train in a real hotel with professionals.",
    location: "Algiers",
    price: 4000,
    duration: 10,
    places: 10,
    image: "https://via.placeholder.com/100",
  },
  // Add more formations as needed...
];
const ShopeModelCard = ({ formation }) => {
  const isHotel = formation?.quantity < 100;
  const isUniversity = formation?.quantity > 150;
  const color = isUniversity ? "green" : isHotel ? "blue" : "black";

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: 10,
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        padding: 16,
        margin: 10,
        background: "white",
        width: "100%",
        maxWidth: 300,
        minHeight: 40, // fixed height for alignment
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex flex-col">
            <h4 style={{ fontSize: 15 }}>{formation?.product}</h4>
            <p className="text-gray-400" style={{ fontSize: 12 }}>
              {formation.description}
            </p>
          </div>
          <div className="text-right">
            <strong style={{ fontSize: 12, color }}>
              {formation?.quantity}
            </strong>
            <div className="font-semibold" style={{ color, fontSize: 12 }}>
              {formation.price} DA
            </div>
          </div>
        </div>

        <p className="text-gray-400 mt-2" style={{ fontSize: 12 }}>
          By {formation?.user?.name}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto", // pushes to bottom
        }}
      >
        <div style={{ fontSize: 12, color: "gray" }}>{formation.name}</div>
        <button
          className="hover:scale-110 transition-all"
          style={{
            background: color,
            color: "white",
            border: "none",
            borderRadius: 5,
            width: 100,
            padding: "6px 12px",
            fontSize: 14,
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
  }),
};


const ShopePage = () => {
const [products,setProducts] = useState([])
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/selling");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        console.log("data")
        console.log(data)
      } else {
      }
    } catch (error) {
      showToast("Error fetching products", "red");
    }
  };

  const tabs = [
    "All",
    "Industry",
    "Universities",
    "Hotels",
    "Ecole",
    "Restaurant",
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTabContent = () => {
    switch (tabs[selectedTab]) {
      case "All":
        return products.map((f) => (
          <ShopeModelCard key={f.createdAt} formation={f} />
        ));
      case "Hotels":
        return formations
          .filter((f) => f.category?.toLowerCase() === "hotel")
          .map((f) => <ShopeModelCard key={f.id} formation={f} />);
      case "Universities":
        return formations
          .filter((f) => f.category?.toLowerCase() === "university")
          .map((f) => <ShopeModelCard key={f.id} formation={f} />);
      default:
        return <p style={{ textAlign: "center" }}>No data for this category</p>;
    }
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Tab Bar */}
      <div style={{ display: "flex", overflowX: "auto", marginBottom: 20 }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            style={{
              padding: "8px 16px",
              marginRight: 10,
              background: selectedTab === index ? "blue" : "transparent",
              color: selectedTab === index ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: 20,
              fontWeight: selectedTab === index ? "bold" : "normal",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {renderTabContent()}
      </div>
    </div>
  );
};




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


const damydata =[
    {target : "youcefl" , price: "2000DA" , date: "2024-03-01" , status: "Paid" , color: "green"},
    {target : "youcefldn" , price: "2000DA" , date: "2024-03-01" , status: "Paid" , color: "green"},
    {target : "youceflfddn" , price: "2000DA" , date: "2024-03-01" , status: "Not-yet" , color: "red"},
    {target : "youceflfddn" , price: "2000DA" , date: "2024-03-01" , status: "Not-yet" , color: "red"},
    {target : "youcefddslfddn" , price: "2000DA" , date: "2024-03-01" , status: "Not-yet" , color: "red"},



]



const OrdersPage = () => {  
 const [data, setdata] = useState([
   {
     status: "On delivery",
     color: "3",
     storage: "30",
     model: "PET",
     image: "./col.jpeg",
     id: 1,
     statusColor: "orange",
   },
   {
     status: "On delivery",
     color: "3",
     id: 2,

     storage: "30",
     model: "PET",
     image: "./col.jpeg",
     statusColor: "orange",
   },
   {
     status: "Retarded",
     color: "3",
     storage: "30",
     id: 3,

     model: "PET",
     image: "./col.jpeg",
     statusColor: "red",
   },
   {
     status: "In magazin",
     color: "3",
     storage: "30",
     id:4 ,
     model: "PET",
     image: "./col.jpeg",
     statusColor: "green",
   },
 ]);


 
  const handleDelete = (id) => {
    setdata((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "0 120px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          My orders
        </h2>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 17 }}>
        {
data
        .map((item, index) => (
          <div key={index} style={{ marginBottom: 20 }}>
            <PhoneItem {...item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PhoneItem = ({ model, storage, color, image, status, statusColor }) => {



  return (
    <div style={{ paddingLeft: 10 }}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 14,
          boxShadow: "2px 2px 5px rgba(158, 158, 158, 0.75)",
          display: "flex",
          alignItems: "center",
          padding: 10,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#f0f0f0",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="phone"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ marginLeft: 16, flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: "bold" }}>{model}</div>
          <div style={{ marginTop: 4, fontSize: 14, color: "#888" }}>
            {color}, {storage} kg
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            paddingRight: 20,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: statusColor,
            }}
          >
            {status}
          </span>
          <button 
          // onClick={handelDelete}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i className="material-icons">
              <MdDelete  color="red" size={30} />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
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
        return <ShopePage />;
      case 2:
        return <OrdersPage />;
      case 3:
        return <InvoiceList invoices={invoices} />;
        case 4 : 
        
      case 5:
        return (
          <div className="space-y-4 p-4">
            {damydata.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="bg-green-50 border-l-4 rounded-lg p-4 shadow-md"
                style={{ borderColor: item.color }}
              >
                <p className="text-gray-700">
                  📢 <span className="font-bold">{item.target}</span> sent you a
                  notification on{" "}
                  <span className="font-semibold">{item.date}</span>.
                </p>
                <p className="mt-1">
                  ✅ <span className="font-semibold">Status:</span>{" "}
                  <span style={{ color: item.color }}>{item.status}</span> — 💰{" "}
                  <span className="font-semibold">Price:</span> {item.price}
                </p>

                <div className="flex justify-end mt-2">
                  <button className="hover:scale-110 transition-transform">
                    <MdDelete size={40} color="red" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );
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
