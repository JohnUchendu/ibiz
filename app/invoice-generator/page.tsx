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



// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { FiPlusCircle, FiDownload } from "react-icons/fi";
// import jsPDF from "jspdf";
// import QRCode from "qrcode";
// import PromoBanner from "@/components/PromoBanner";
// // import PromoPopup from "@/components/PromoPopUp";
// import TestimonialCarousel from "@/components/Testimonial";

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
//       </h1>
//       <p className="text-center text-gray-600 mb-8">
//         Generate elegant invoices in seconds - perfect for growing businesses
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//         {/* Left Panel: Invoice Form */}
//         <Card className="p-4">
//           <CardContent className="space-y-4">
//             <Input
//               placeholder="Company Name"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//             />
//             <Input
//               placeholder="Client Name"
//               value={client}
//               onChange={(e) => setClient(e.target.value)}
//             />
//             <div className="flex gap-2">
//               <Input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//               <Input
//                 type="date"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//               />
//             </div>

//             {items.map((item, index) => (
//               <div key={index} className="flex gap-2">
//                 <Input
//                   placeholder="Description"
//                   value={item.desc}
//                   onChange={(e) =>
//                     handleItemChange(index, "desc", e.target.value)
//                   }
//                 />
//                 <Input
//                   type="number"
//                   placeholder="Qty"
//                   value={item.qty}
//                   onChange={(e) =>
//                     handleItemChange(index, "qty", Number(e.target.value))
//                   }
//                 />
//                 <Input
//                   type="number"
//                   placeholder="Price"
//                   value={item.price}
//                   onChange={(e) =>
//                     handleItemChange(index, "price", Number(e.target.value))
//                   }
//                 />
//               </div>
//             ))}

//             <Button onClick={addItem} variant="outline" className="w-full">
//               <FiPlusCircle className="w-4 h-4 mr-2" /> Add Item
//             </Button>

//             <Textarea
//               placeholder="Notes / Terms"
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//             />

//             <Button onClick={generatePDF} className="w-full">
//               <FiDownload className="w-4 h-4 mr-2" /> Download Invoice
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Right Panel: Invoice Preview */}
//         <Card className="p-4">
//           <CardContent>
//             <h2 className="text-xl font-bold">Invoice Preview</h2>
//             <p className="text-gray-600">{company || "Your Company"}</p>
//             <p className="mt-2">Invoice No: {invoiceNo}</p>
//             <p>Date: {date}</p>
//             {dueDate && <p>Due Date: {dueDate}</p>}
//             <p className="mt-2">Bill To: {client || "Client Name"}</p>

//             <table className="w-full mt-4 text-sm">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left">Description</th>
//                   <th>Qty</th>
//                   <th>Price</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map((item, i) => (
//                   <tr key={i} className="border-b">
//                     <td>{item.desc || "-"}</td>
//                     <td className="text-center">{item.qty}</td>
//                     <td className="text-center">{item.price}</td>
//                     <td className="text-right">{item.qty * item.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <p className="mt-4 font-bold text-right">Subtotal: {subtotal}</p>
//             {notes && <p className="mt-2 text-gray-600">Notes: {notes}</p>}
//           </CardContent>
//         </Card>
//       </div>
//       <TestimonialCarousel/>
//       <PromoBanner/>
//       {/* <PromoPopup/> */}
//     </>
//   );
// }
'use client';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FiPlusCircle, FiDownload } from 'react-icons/fi';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import PromoBanner from '@/components/PromoBanner';
import TestimonialCarousel from '@/components/Testimonial';

type InvoiceItem = {
  desc: string;
  qty: number;
  price: number;
};

interface FormData {
  email: string;
  company: string;
  companyEmail: string;
  website: string;
  address: string;
  client: string;
  invoiceNo: string;
  date: string;
  dueDate: string;
  notes: string;
  currency: string;
  logo?: FileList;
}

export default function InvoiceGenerator() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      email: '',
      company: '',
      companyEmail: '',
      website: '',
      address: '',
      client: '',
      invoiceNo: 'INV-' + Date.now(),
      date: new Date().toISOString().substring(0, 10),
      dueDate: '',
      notes: '',
      currency: 'USD',
    },
  });
  const [items, setItems] = useState<InvoiceItem[]>([{ desc: '', qty: 1, price: 0 }]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  // Watch form values for preview
  const formData = watch();

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const newItems = [...items];
    if (field === 'qty' || field === 'price') {
      newItems[index][field] = Number(value);
    } else {
      newItems[index][field] = value as string;
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { desc: '', qty: 1, price: 0 }]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  // Currency symbols mapping
  const currencySymbols: { [key: string]: string } = {
    USD: '$',
    NGN: '₦',
    GBP: '£',
    EUR: '€',
    CNY: '¥',
    JPY: '¥',
    INR: '₹',
  };

  // Handle logo upload and preview
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setMessage('Logo file size exceeds 5MB limit.');
      if (logoInputRef.current) logoInputRef.current.value = '';
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const generatePDF = async (data: FormData) => {
    const doc = new jsPDF();
    let y = 20;

    // Add logo if uploaded
    if (data.logo && data.logo.length > 0) {
      const logoFile = data.logo.item(0);
      if (logoFile) {
        const logoUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(new Error('Failed to read logo file'));
          reader.readAsDataURL(logoFile);
        });
        doc.addImage(logoUrl, 'PNG', 10, y, 40, 40);
        y += 50;
      }
    }

    // Add company details
    doc.setFontSize(18);
    doc.text(data.company || 'Your Company', 10, y);
    y += 10;
    doc.setFontSize(12);
    if (data.companyEmail) doc.text(`Email: ${data.companyEmail}`, 10, y);
    y += 6;
    if (data.website) doc.text(`Website: ${data.website}`, 10, y);
    y += 6;
    if (data.address) {
      const addressLines = doc.splitTextToSize(data.address, 80);
      doc.text(addressLines, 10, y);
      y += addressLines.length * 6;
    }

    // Add invoice details
    doc.text(`Invoice No: ${data.invoiceNo}`, 10, y);
    y += 6;
    doc.text(`Date: ${data.date}`, 10, y);
    y += 6;
    if (data.dueDate) doc.text(`Due Date: ${data.dueDate}`, 10, y);
    y += 6;
    doc.text(`Bill To: ${data.client || 'Client Name'}`, 10, y);
    y += 10;

    // Add items table
    doc.text('Description', 10, y);
    doc.text('Qty', 100, y);
    doc.text('Price', 130, y);
    doc.text('Total', 170, y);
    y += 10;
    items.forEach((item) => {
      doc.text(item.desc || '-', 10, y);
      doc.text(String(item.qty), 100, y);
      doc.text(`${currencySymbols[data.currency]}${item.price}`, 130, y);
      doc.text(`${currencySymbols[data.currency]}${item.qty * item.price}`, 170, y);
      y += 10;
    });

    doc.text(`Subtotal: ${currencySymbols[data.currency]}${subtotal}`, 150, y + 10);
    y += 20;
    if (data.notes) {
      const noteLines = doc.splitTextToSize(`Notes: ${data.notes}`, 180);
      doc.text(noteLines, 10, y);
      y += noteLines.length * 10;
    }

    const qrData = await QRCode.toDataURL('https://pay.example.com/' + data.invoiceNo);
    doc.addImage(qrData, 'PNG', 150, y, 40, 40);

    return doc.output('blob');
  };

  const onSubmit = async (data: FormData) => {
    // Prevent spam with localStorage (1-hour cooldown)
    const lastSubmit = localStorage.getItem(`invoice-${data.email}`);
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < 3600000) {
      setMessage('You recently generated an invoice! Check your email or wait 1 hour.');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      // Generate PDF
      const pdfBlob = await generatePDF(data);
      const pdfBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            console.log('pdfBase64:', reader.result.slice(0, 50)); // Debug
            resolve(reader.result.split(',')[1]);
          } else {
            reject(new Error('Failed to convert PDF to base64'));
          }
        };
        reader.onerror = () => reject(new Error('FileReader error'));
        reader.readAsDataURL(pdfBlob);
      });

      // Send via Resend
      const response = await fetch('/api/send-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, clientName: data.client, pdfBase64 }),
      });

      if (response.ok) {
        localStorage.setItem(`invoice-${data.email}`, Date.now().toString());
        setMessage('Invoice sent! Check your email for the attached PDF and marketing tips.');
        if (logoInputRef.current) logoInputRef.current.value = ''; // Reset file input
        setLogoPreview(null); // Reset logo preview
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send invoice: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('onSubmit error:', error);
      setMessage('Error sending invoice. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Professional financial management
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Generate elegant invoices with your logo and details in seconds - perfect for growing businesses
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Card className="p-4">
          <CardContent className="space-y-4">
            <Input
              placeholder="Your Email (US SMBs Get Free Email Tips!)"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <Input
              placeholder="Company Name"
              {...register('company')}
            />
            <Input
              placeholder="Company Email"
              {...register('companyEmail', { pattern: { value: /^\S+@\S+$/i, message: 'Invalid company email' } })}
            />
            {errors.companyEmail && <p className="text-red-500 text-sm">{errors.companyEmail.message}</p>}
            <Input
              placeholder="Website (e.g., https://example.com)"
              {...register('website', { pattern: { value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/, message: 'Invalid URL' } })}
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
            <Textarea
              placeholder="Company Address"
              {...register('address')}
            />
            <Input
              type="file"
              accept="image/png,image/jpeg"
              {...register('logo')}
              onChange={handleLogoChange}
              ref={logoInputRef}
            />
            {errors.logo && <p className="text-red-500 text-sm">{errors.logo.message}</p>}
            {logoPreview && (
              <img src={logoPreview} alt="Logo Preview" className="mt-2 w-24 h-24 object-contain" />
            )}
            <Input
              placeholder="Client Name"
              {...register('client', { required: 'Client name is required' })}
            />
            {errors.client && <p className="text-red-500 text-sm">{errors.client.message}</p>}
            <div className="flex gap-2">
              <Input
                type="date"
                {...register('date', { required: 'Date is required' })}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
              <Input
                type="date"
                {...register('dueDate')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                {...register('currency', { required: 'Currency is required' })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="USD">Dollar ($)</option>
                <option value="NGN">Naira (₦)</option>
                <option value="GBP">Pound (£)</option>
                <option value="EUR">Euro (€)</option>
                <option value="CNY">Yuan (¥)</option>
                <option value="JPY">Yen (¥)</option>
                <option value="INR">Rupee (₹)</option>
              </select>
              {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}
            </div>
            {items.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder="Description"
                  value={item.desc}
                  onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Qty"
                  value={item.qty}
                  onChange={(e) => handleItemChange(index, 'qty', Number(e.target.value))}
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, 'price', Number(e.target.value))}
                />
              </div>
            ))}
            <Button onClick={addItem} variant="outline" className="w-full">
              <FiPlusCircle className="w-4 h-4 mr-2" /> Add Item
            </Button>
            <Textarea
              placeholder="Notes / Terms"
              {...register('notes')}
            />
            <Button
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Sending...' : <><FiDownload className="w-4 h-4 mr-2" /> Generate & Email Invoice</>}
            </Button>
            {message && (
              <p className={`mt-4 text-center ${message.includes('Error') || message.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-bold">Invoice Preview</h2>
            {logoPreview && (
              <img src={logoPreview} alt="Logo Preview" className="mt-2 w-24 h-24 object-contain" />
            )}
            <p className="text-gray-600">{formData.company || 'Your Company'}</p>
            {formData.companyEmail && <p>Email: {formData.companyEmail}</p>}
            {formData.website && <p>Website: {formData.website}</p>}
            {formData.address && <p>Address: {formData.address}</p>}
            <p className="mt-2">Invoice No: {formData.invoiceNo}</p>
            <p>Date: {formData.date}</p>
            {formData.dueDate && <p>Due Date: {formData.dueDate}</p>}
            <p className="mt-2">Bill To: {formData.client || 'Client Name'}</p>
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
                    <td>{item.desc || '-'}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-center">{currencySymbols[formData.currency]}{item.price}</td>
                    <td className="text-right">{currencySymbols[formData.currency]}{item.qty * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-bold text-right">Subtotal: {currencySymbols[formData.currency]}{subtotal}</p>
            {formData.notes && <p className="mt-2 text-gray-600">Notes: {formData.notes}</p>}
          </CardContent>
        </Card>
      </div>
      <TestimonialCarousel />
      <PromoBanner />
    </>
  );
}
