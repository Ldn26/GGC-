import React from "react";

// Main InvoiceList component
export default function InvoiceList({ invoices }) {
  if (!Array.isArray(invoices)) return <p>No invoices to display.</p>;

  return (
    <div className="flex flex-col gap-3 mt-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex justify-between items-center p-3 rounded-lg shadow bg-white"
        >
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm">
              {invoice.customer?.charAt(0) || "?"}
            </div>
            <div>
              <div className="font-semibold">{invoice.customer}</div>
              <div className="text-sm text-gray-600">
                Product name:
                <span className="font-medium text-blue-600 ml-1">
                  {invoice.item}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-right">
            <div className={`text-${invoice.statusColor}-600 font-medium`}>
              {invoice.status}
            </div>
            <div className="text-black">${invoice.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Class to model Invoice (summary with customer)
export class Invoice {
  constructor({ id, customer, item, date, status, price, statusColor }) {
    this.id = id;
    this.customer = customer;
    this.item = item;
    this.date = date;
    this.status = status;
    this.price = price;
    this.statusColor = statusColor;
  }
}

// Class to model a detailed InvoiceItem (e.g. per-product)
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
        productName: "Black Backpack",
        size: 40,
        price: 120.0,
        dateTime: new Date("2024-01-15T10:30:00"),
      }),
      new InvoiceItem({
        productName: "Utility Belt",
        size: 32,
        price: 89.99,
        dateTime: new Date("2024-01-20T14:45:00"),
      }),
    ];
  }
}
