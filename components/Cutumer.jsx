import { InvoiceItem } from "./invoiceModel.js";

export class Customer {
  constructor({ name, invoices = [], image }) {
    this.name = name;
    this.invoices = invoices; // should be an array of InvoiceItem objects
    this.image = image;
  }
}


export class Invoice {
  constructor({ id, customer, item, date, status, price, statusColor }) {
    this.id = id;
    this.customer = customer;
    this.item = item;
    this.date = date;
    this.status = status;
    this.price = price;
    this.statusColor = statusColor; // pass as a string like 'green', '#FF0000', etc.
  }
}

// InvoiceItem model
export class InvoiceItem {
  constructor({ productName, size, price, dateTime }) {
    this.productName = productName;
    this.size = size;
    this.price = price;
    this.dateTime = dateTime;
  }

  static getSampleData() {
    return [
      new InvoiceItem({
        productName: "Plastic Bottle",
        size: 500,
        price: 15.0,
        dateTime: new Date("2024-01-15T10:30:00"),
      }),
      new InvoiceItem({
        productName: "Metal Can",
        size: 330,
        price: 10.5,
        dateTime: new Date("2024-02-05T14:00:00"),
      }),
    ];
  }
}



import React from "react";

// Utility function to format DateTime
function formatDate(dateTime) {
  const date = new Date(dateTime);
  return {
    date: date.toLocaleDateString("en-CA"), // yyyy-mm-dd
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

export default function InvoiceTile({ item }) {
  const { date, time } = formatDate(item.dateTime);

  return (
    <div style={styles.tile}>
      <div style={styles.icon}>
        <span role="img" aria-label="invoice">
          🧾
        </span>
      </div>

      <div style={styles.middle}>
        <div style={styles.product}>{item.productName}</div>
        <div style={styles.subText}>
          Size: {item.size} kg | Price:{" "}
          <span style={styles.price}>${item.price.toFixed(2)}</span> da
        </div>
      </div>

      <div style={styles.trailing}>
        <div style={styles.date}>{date}</div>
        <div style={styles.time}>{time}</div>
      </div>
    </div>
  );
}

const styles = {
  tile: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 8,
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  icon: {
    fontSize: 24,
    color: "blue",
    marginRight: 16,
  },
  middle: {
    flex: 1,
  },
  product: {
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
  price: {
    color: "green",
    fontWeight: "500",
  },
  trailing: {
    textAlign: "right",
    fontSize: 12,
    color: "#999",
  },
  date: {
    marginBottom: 4,
  },
  time: {},
};


export default function InvoicesPage() {
  const customers = [
    {
      name: "Eren Yeager",
      image: "/images/profileImage.jpeg",
      invoices: [
        { productName: "PET", size: 4, price: 101.00, dateTime: new Date(Date.now() - 2 * 3600000) },
        { productName: "TPU", size: 2, price: 45.99, dateTime: new Date(Date.now() - 86400000) },
      ],
    },
    {
      name: "Mikasa Ackerman",
      image: "/images/profileImage.jpeg",
      invoices: [
        { productName: "PLASTIC", size: 9, price: 89.50, dateTime: new Date(Date.now() - 5 * 3600000) },
      ],
    },
    {
      name: "Armin Arlert",
      image: "/images/profileImage.jpeg",
      invoices: [
        { productName: "TPU", size: 13, price: 250.75, dateTime: new Date(Date.now() - 3 * 86400000) },
        { productName: "PET", size: 7, price: 20.00, dateTime: new Date(Date.now() - 20 * 3600000) },
      ],
    },
  ];

  return (
    <div style={styless.page}>
      {customers.map((customer, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.cardHeader}>
            <img src={customer.image} alt="avatar" style={styles.avatar} />
            <span style={styles.customerName}>{customer.name}</span>
          </div>
          <hr style={styles.divider} />
          {customer.invoices.map((item, i) => (
            <InvoiceTile key={i} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Inline styles
const styless = {
  page: {
    backgroundColor: '#fff',
    padding: 24,
  },
  card: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 10,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    margin: '10px 0',
    border: 'none',
    borderTop: '1px solid #eee',
  },
  invoiceTile: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
  },
  invoiceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  invoiceContent: {
    flex: 1,
  },
  invoiceTitle: {
    fontWeight: '600',
  },
  invoiceSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  invoiceTime: {
    textAlign: 'right',
    fontSize: 12,
    color: '#888',
  },
};