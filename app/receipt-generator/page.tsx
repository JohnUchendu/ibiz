"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import jsPDF from "jspdf";
// import PromoPopup from "@/components/PromoPopUp";
import PromoBanner from "@/components/PromoBanner";
import TestimonialCarousel from "@/components/Testimonial";

type Item = {
  name: string;
  price: number;
};

export default function ReceiptGenerator() {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const addItem = () => {
    if (!itemName || !itemPrice) return;
    setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
    setItemName("");
    setItemPrice("");
  };

  const total = items.reduce((acc, i) => acc + i.price, 0);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Receipt", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Customer: ${customer}`, 20, 30);

    let y = 40;
    items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - ₦${item.price.toFixed(2)}`, 20, y);
      y += 10;
    });

    doc.text(`Total: ₦${total.toFixed(2)}`, 20, y + 10);
    doc.save("receipt.pdf");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
       Polished Transactions
      </h1>
      <p className="text-center text-gray-600 mb-8">
       Generate elegant receipts in second, great for growing businesses.
      </p>
      <div className="container mx-auto p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Receipt Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Customer name */}
            <div>
              <Label htmlFor="customer">Customer Name</Label>
              <Input
                id="customer"
                placeholder="Enter customer name"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>

            {/* Add items */}
            <div className="flex space-x-2">
              <Input
                placeholder="Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
              <Button onClick={addItem}>Add</Button>
            </div>

            {/* Receipt preview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Receipt Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Customer: {customer || "N/A"}</p>
                <ul className="mt-3 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex justify-between border-b pb-1">
                      <span>{item.name}</span>
                      <span>₦{item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-bold">Total: ₦{total.toFixed(2)}</p>
              </CardContent>
            </Card>

            {/* Download button */}
            <Button onClick={downloadPDF} className="w-1/4">
              Download Receipt (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
      <TestimonialCarousel/>
      <PromoBanner/>
      {/* <PromoPopup/> */}
    </>
  );
}
