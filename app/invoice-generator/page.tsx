// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { PlusCircle, Download } from "lucide-react";
// import jsPDF from "jspdf";
// import QRCode from "qrcode";
// import PromoBanner from "@/components/PromoBanner";
// import PromoPopup from "@/components/PromoPopUp";

// type InvoiceItem = {
//   desc: string;
//   qty: number;
//   price: number;
// };

// export default function InvoiceGenerator() {
//   const [items, setItems] = useState<InvoiceItem[]>([
//     { desc: "", qty: 1, price: 0 },
//   ]);

//   const [company, setCompany] = useState("");
//   const [client, setClient] = useState("");
//   const [invoiceNo, setInvoiceNo] = useState("INV-" + Date.now());
//   const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
//   const [dueDate, setDueDate] = useState("");
//   //   const [items, setItems] = useState([{ desc: "", qty: 1, price: 0 }]);
//   const [notes, setNotes] = useState("");

//   const handleItemChange = (
//     index: number,
//     field: keyof InvoiceItem,
//     value: string | number
//   ) => {
//     const newItems = [...items];
//     // If qty or price, ensure it's a number
//     if (field === "qty" || field === "price") {
//       newItems[index][field] = Number(value) as any;
//     } else {
//       newItems[index][field] = value as string;
//     }
//     setItems(newItems);
//   };

//   const addItem = () => {
//     setItems([...items, { desc: "", qty: 1, price: 0 }]);
//   };

//   const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

//   const generatePDF = async () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text(company || "Your Company", 10, 20);
//     doc.setFontSize(12);
//     doc.text(`Invoice No: ${invoiceNo}`, 10, 30);
//     doc.text(`Date: ${date}`, 10, 36);
//     if (dueDate) doc.text(`Due Date: ${dueDate}`, 10, 42);

//     doc.text(`Bill To: ${client || "Client Name"}`, 10, 54);

//     let y = 70;
//     doc.text("Description", 10, y);
//     doc.text("Qty", 100, y);
//     doc.text("Price", 130, y);
//     doc.text("Total", 170, y);

//     y += 10;
//     items.forEach((item) => {
//       doc.text(item.desc || "-", 10, y);
//       doc.text(String(item.qty), 100, y);
//       doc.text(String(item.price), 130, y);
//       doc.text(String(item.qty * item.price), 170, y);
//       y += 10;
//     });

//     doc.text(`Subtotal: ${subtotal}`, 150, y + 10);

//     if (notes) doc.text(`Notes: ${notes}`, 10, y + 30);

//     // Generate QR code for payment link (example: Paystack link)
//     const qrData = await QRCode.toDataURL(
//       "https://pay.example.com/" + invoiceNo
//     );
//     doc.addImage(qrData, "PNG", 150, y + 40, 40, 40);

//     doc.save(`${invoiceNo}.pdf`);
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Professional financial management
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//         Generate elegant invoices in seconds - perfect for growing businesses
//         </p>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//       {/* Left Panel: Invoice Form */}
//       <Card className="p-4">
//         <CardContent className="space-y-4">
//           <Input
//             placeholder="Company Name"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//           />
//           <Input
//             placeholder="Client Name"
//             value={client}
//             onChange={(e) => setClient(e.target.value)}
//           />
//           <div className="flex gap-2">
//             <Input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <Input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//             />
//           </div>

//           {items.map((item, index) => (
//             <div key={index} className="flex gap-2">
//               <Input
//                 placeholder="Description"
//                 value={item.desc}
//                 onChange={(e) =>
//                   handleItemChange(index, "desc", e.target.value)
//                 }
//               />
//               <Input
//                 type="number"
//                 placeholder="Qty"
//                 value={item.qty}
//                 onChange={(e) =>
//                   handleItemChange(index, "qty", Number(e.target.value))
//                 }
//               />
//               <Input
//                 type="number"
//                 placeholder="Price"
//                 value={item.price}
//                 onChange={(e) =>
//                   handleItemChange(index, "price", Number(e.target.value))
//                 }
//               />
//             </div>
//           ))}

//           <Button onClick={addItem} variant="outline" className="w-full">
//             <PlusCircle className="w-4 h-4 mr-2" /> Add Item
//           </Button>

//           <Textarea
//             placeholder="Notes / Terms"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           />

//           <Button onClick={generatePDF} className="w-full">
//             <Download className="w-4 h-4 mr-2" /> Download Invoice
//           </Button>
//         </CardContent>
//       </Card>

//       {/* Right Panel: Invoice Preview */}
//       <Card className="p-4">
//         <CardContent>
//           <h2 className="text-xl font-bold">Invoice Preview</h2>
//           <p className="text-gray-600">{company || "Your Company"}</p>
//           <p className="mt-2">Invoice No: {invoiceNo}</p>
//           <p>Date: {date}</p>
//           {dueDate && <p>Due Date: {dueDate}</p>}
//           <p className="mt-2">Bill To: {client || "Client Name"}</p>

//           <table className="w-full mt-4 text-sm">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left">Description</th>
//                 <th>Qty</th>
//                 <th>Price</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, i) => (
//                 <tr key={i} className="border-b">
//                   <td>{item.desc || "-"}</td>
//                   <td className="text-center">{item.qty}</td>
//                   <td className="text-center">{item.price}</td>
//                   <td className="text-right">{item.qty * item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <p className="mt-4 font-bold text-right">Subtotal: {subtotal}</p>
//           {notes && <p className="mt-2 text-gray-600">Notes: {notes}</p>}
//         </CardContent>
//       </Card>
//     </div>
//     <PromoBanner/>
//     <PromoPopup/>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiPlusCircle, FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";
import TestimonialCarousel from "@/components/Testimonial";

type InvoiceItem = {
  desc: string;
  qty: number;
  price: number;
};

export default function InvoiceGenerator() {
  const [items, setItems] = useState<InvoiceItem[]>([
    { desc: "", qty: 1, price: 0 },
  ]);

  const [company, setCompany] = useState("");
  const [client, setClient] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("INV-" + Date.now());
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const newItems = [...items];
    // If qty or price, ensure it's a number
    if (field === "qty" || field === "price") {
      newItems[index][field] = Number(value) as any;
    } else {
      newItems[index][field] = value as string;
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { desc: "", qty: 1, price: 0 }]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  const generatePDF = async () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(company || "Your Company", 10, 20);
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoiceNo}`, 10, 30);
    doc.text(`Date: ${date}`, 10, 36);
    if (dueDate) doc.text(`Due Date: ${dueDate}`, 10, 42);

    doc.text(`Bill To: ${client || "Client Name"}`, 10, 54);

    let y = 70;
    doc.text("Description", 10, y);
    doc.text("Qty", 100, y);
    doc.text("Price", 130, y);
    doc.text("Total", 170, y);

    y += 10;
    items.forEach((item) => {
      doc.text(item.desc || "-", 10, y);
      doc.text(String(item.qty), 100, y);
      doc.text(String(item.price), 130, y);
      doc.text(String(item.qty * item.price), 170, y);
      y += 10;
    });

    doc.text(`Subtotal: ${subtotal}`, 150, y + 10);

    if (notes) doc.text(`Notes: ${notes}`, 10, y + 30);

    // Generate QR code for payment link (example: Paystack link)
    const qrData = await QRCode.toDataURL(
      "https://pay.example.com/" + invoiceNo
    );
    doc.addImage(qrData, "PNG", 150, y + 40, 40, 40);

    doc.save(`${invoiceNo}.pdf`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Professional financial management
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Generate elegant invoices in seconds - perfect for growing businesses
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Panel: Invoice Form */}
        <Card className="p-4">
          <CardContent className="space-y-4">
            <Input
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              placeholder="Client Name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
            <div className="flex gap-2">
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            {items.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder="Description"
                  value={item.desc}
                  onChange={(e) =>
                    handleItemChange(index, "desc", e.target.value)
                  }
                />
                <Input
                  type="number"
                  placeholder="Qty"
                  value={item.qty}
                  onChange={(e) =>
                    handleItemChange(index, "qty", Number(e.target.value))
                  }
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", Number(e.target.value))
                  }
                />
              </div>
            ))}

            <Button onClick={addItem} variant="outline" className="w-full">
              <FiPlusCircle className="w-4 h-4 mr-2" /> Add Item
            </Button>

            <Textarea
              placeholder="Notes / Terms"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <Button onClick={generatePDF} className="w-full">
              <FiDownload className="w-4 h-4 mr-2" /> Download Invoice
            </Button>
          </CardContent>
        </Card>

        {/* Right Panel: Invoice Preview */}
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-bold">Invoice Preview</h2>
            <p className="text-gray-600">{company || "Your Company"}</p>
            <p className="mt-2">Invoice No: {invoiceNo}</p>
            <p>Date: {date}</p>
            {dueDate && <p>Due Date: {dueDate}</p>}
            <p className="mt-2">Bill To: {client || "Client Name"}</p>

            <table className="w-full mt-4 text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left">Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td>{item.desc || "-"}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-right">{item.qty * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 font-bold text-right">Subtotal: {subtotal}</p>
            {notes && <p className="mt-2 text-gray-600">Notes: {notes}</p>}
          </CardContent>
        </Card>
      </div>
      <TestimonialCarousel/>
      <PromoBanner/>
      <PromoPopup/>
    </>
  );
}