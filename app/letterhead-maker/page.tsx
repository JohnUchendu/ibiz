

// "use client";

// import { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import HtmlDocx from "html-docx-js/dist/html-docx";
// import { saveAs } from "file-saver";

// export default function LetterheadMaker() {
//   const previewRef = useRef<HTMLDivElement>(null);

//   // Brand inputs
//   const [companyName, setCompanyName] = useState("Your Company Name");
//   const [tagline, setTagline] = useState("Your tagline goes here");
//   const [address, setAddress] = useState("123 Business Rd, City, Country");
//   const [phone, setPhone] = useState("+234 800 000 0000");
//   const [email, setEmail] = useState("info@company.com");
//   const [website, setWebsite] = useState("www.company.com");
//   const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);

//   // Settings
//   const [template, setTemplate] = useState("classic");
//   const [primaryColor, setPrimaryColor] = useState("#2563eb");
//   const [pageSize, setPageSize] = useState("A4");
//   const [margin, setMargin] = useState(20);

//   // Upsell trigger
//   const [exported, setExported] = useState(false);

//   // Page sizes in mm
//   const sizes: Record<string, [number, number]> = {
//     A4: [210, 297],
//     Letter: [216, 279],
//   };
//   const [pageWidth, pageHeight] = sizes[pageSize];

//   // Upload logo
//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = () => setLogoDataUrl(reader.result as string);
//     reader.readAsDataURL(file);
//   };

 
//   // page.tsx (inside your letterhead export section)

//    // ✅ Add the ref here
//   const letterheadRef = useRef<HTMLDivElement>(null);

// // ✅ Utility: strip unsupported oklch() colors
// function sanitizeHtml(html: string) {
//   return html.replace(/oklch\([^)]+\)/g, "#000000"); // fallback to black
// }

// const handleExport = () => {
//   if (!letterheadRef.current) return;

//   // Get HTML
//   const html = letterheadRef.current.innerHTML;

//   // ✅ Sanitize before converting
//   const safeHtml = sanitizeHtml(html);

//   // Convert to DOCX
//   const docxBlob = HtmlDocx.asBlob(safeHtml);

//   // Trigger download
//   const url = URL.createObjectURL(docxBlob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "letterhead.docx";
//   a.click();
//   URL.revokeObjectURL(url);
// };

//  // ✅ Export as PDF
//   const exportPDF = async () => {
//     if (!letterheadRef.current) return;

//     const element = letterheadRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("letterhead.pdf");
//   };

//   // Export Word
//   const exportWord = () => {
//     if (!previewRef.current) return;
//     const html = `<!DOCTYPE html><html><body>${previewRef.current.innerHTML}</body></html>`;
//     const blob = HtmlDocx.asBlob(html);
//     saveAs(blob, "letterhead.docx");
//     setExported(true);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Letterhead Maker</h1>
//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Settings Panel */}
//         <div className="space-y-4 bg-white p-4 rounded-2xl shadow">
//           <h3 className="text-lg font-semibold">Brand Settings</h3>
//           <input
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             placeholder="Company Name"
//             className="w-full border rounded p-2"
//           />
//           <input
//             value={tagline}
//             onChange={(e) => setTagline(e.target.value)}
//             placeholder="Tagline"
//             className="w-full border rounded p-2"
//           />
//           <input
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//             className="w-full border rounded p-2"
//           />
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Phone"
//             className="w-full border rounded p-2"
//           />
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full border rounded p-2"
//           />
//           <input
//             value={website}
//             onChange={(e) => setWebsite(e.target.value)}
//             placeholder="Website"
//             className="w-full border rounded p-2"
//           />
//           <input type="file" accept="image/*" onChange={handleLogoUpload} />

//           <h3 className="text-lg font-semibold mt-6">Design Settings</h3>
//           <label className="block text-sm">Template</label>
//           <select
//             value={template}
//             onChange={(e) => setTemplate(e.target.value)}
//             className="w-full border rounded p-2"
//           >
//             <option value="classic">Classic</option>
//             <option value="modern">Modern</option>
//             <option value="minimal">Minimal</option>
//             <option value="bordered">Bordered</option>
//             <option value="sidebar">Sidebar</option>
//           </select>

//           <label className="block text-sm mt-2">Primary Color</label>
//           <input
//             type="color"
//             value={primaryColor}
//             onChange={(e) => setPrimaryColor(e.target.value)}
//             className="w-16 h-10 border rounded"
//           />

//           <label className="block text-sm mt-2">Page Size</label>
//           <select
//             value={pageSize}
//             onChange={(e) => setPageSize(e.target.value)}
//             className="w-full border rounded p-2"
//           >
//             <option value="A4">A4</option>
//             <option value="Letter">Letter</option>
//           </select>

//           <label className="block text-sm mt-2">Margin (mm)</label>
//           <input
//             type="number"
//             value={margin}
//             onChange={(e) => setMargin(Number(e.target.value))}
//             className="w-full border rounded p-2"
//           />

//           <div className="flex gap-3 mt-4">
//             <button
//               onClick={exportPDF}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Export PDF
//             </button>
//             <button
//               onClick={exportWord}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Export Word
//             </button>
//           </div>
//         </div>

//         {/* Preview Area */}
//         <div className="md:col-span-2 bg-white p-4 rounded-2xl shadow">
//           <h3 className="text-sm font-medium mb-2">Preview</h3>
//           <div className="border rounded overflow-hidden">
//             <div
//               ref={previewRef}
//               className="bg-white"
//               style={{
//                 width: `${pageWidth}mm`,
//                 minHeight: `${pageHeight}mm`,
//                 padding: `${margin}mm`,
//               }}
//             >
//               {/* ✅ Templates */}
//               {template === "classic" && (
//                 <div style={{ color: primaryColor }}>
//                   {logoDataUrl && (
//                     <img src={logoDataUrl} alt="logo" className="h-16 mb-2" />
//                   )}
//                   <h1 className="text-2xl font-bold">{companyName}</h1>
//                   <p className="text-sm text-gray-600">{tagline}</p>
//                   <hr className="my-4" />
//                   <p className="text-sm">{address}</p>
//                   <p className="text-sm">
//                     {phone} | {email} | {website}
//                   </p>
//                 </div>
//               )}

//               {template === "modern" && (
//                 <div
//                   style={{
//                     borderLeft: `6px solid ${primaryColor}`,
//                     paddingLeft: "10px",
//                   }}
//                 >
//                   <h1
//                     className="text-2xl font-bold"
//                     style={{ color: primaryColor }}
//                   >
//                     {companyName}
//                   </h1>
//                   <p className="italic text-gray-600">{tagline}</p>
//                   {logoDataUrl && (
//                     <img src={logoDataUrl} alt="logo" className="h-20 mt-2" />
//                   )}
//                   <div className="mt-4 text-sm">
//                     <p>{address}</p>
//                     <p>
//                       {phone} | {email}
//                     </p>
//                     <p>{website}</p>
//                   </div>
//                 </div>
//               )}

//               {template === "minimal" && (
//                 <div className="text-center">
//                   {logoDataUrl && (
//                     <img
//                       src={logoDataUrl}
//                       alt="logo"
//                       className="h-16 mx-auto mb-2"
//                     />
//                   )}
//                   <h1 className="text-xl font-semibold">{companyName}</h1>
//                   <p className="text-sm text-gray-500">{tagline}</p>
//                 </div>
//               )}

//               {template === "bordered" && (
//                 <div
//                   style={{
//                     border: `2px solid ${primaryColor}`,
//                     padding: "10px",
//                     borderRadius: "8px",
//                   }}
//                 >
//                   <h1
//                     className="text-xl font-bold"
//                     style={{ color: primaryColor }}
//                   >
//                     {companyName}
//                   </h1>
//                   <p className="text-sm">{tagline}</p>
//                   {logoDataUrl && (
//                     <img src={logoDataUrl} alt="logo" className="h-14 mt-2" />
//                   )}
//                   <div className="mt-4 text-sm">
//                     <p>{address}</p>
//                     <p>
//                       {phone} | {email} | {website}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {template === "sidebar" && (
//                 <div className="flex">
//                   <div
//                     style={{ background: primaryColor }}
//                     className="w-1/3 p-4 text-white"
//                   >
//                     {logoDataUrl && (
//                       <img src={logoDataUrl} alt="logo" className="h-16 mb-3" />
//                     )}
//                     <h1 className="text-lg font-bold">{companyName}</h1>
//                     <p className="text-xs">{tagline}</p>
//                   </div>
//                   <div className="w-2/3 p-4 text-sm">
//                     <p>{address}</p>
//                     <p>{phone}</p>
//                     <p>{email}</p>
//                     <p>{website}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ✅ Upsell CTA (only shows after export) */}
//           {exported && (
//             <div className="mt-6 bg-white shadow-md rounded-xl p-5 border text-center">
//               <p className="text-lg font-medium text-gray-800 mb-3">
//                 You’ve already taken the first step — bring it to life with a
//                 professional business website.
//               </p>
//               <a
//                 href="/website"
//                 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Launch your website today
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

// HtmlDocx has no types, so require is safer
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlDocx = require("html-docx-js/dist/html-docx");

export default function LetterheadMaker() {
  const [companyName, setCompanyName] = useState("Your Company Ltd.");
  const [tagline, setTagline] = useState("Professional | Reliable | Trusted");
  const [address, setAddress] = useState("123 Business Street, Lagos, Nigeria");
  const [phone, setPhone] = useState("+234 800 000 0000");
  const [email, setEmail] = useState("hello@company.com");
  const [website, setWebsite] = useState("www.company.com");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#0f172a");
  const [secondaryColor, setSecondaryColor] = useState("#6b7280");
  const [template, setTemplate] = useState<
    "classic" | "modern" | "minimal" | "bordered" | "sidebar"
  >("classic");

  const [pageWidth, setPageWidth] = useState(210); // mm
  const [pageHeight, setPageHeight] = useState(297); // mm
  const [margin, setMargin] = useState(20); // mm

  const previewRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<"pdf" | "word" | null>(null);
  const [exported, setExported] = useState(false);

  async function onLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function exportPDF() {
    if (!previewRef.current) return;
    setLoading("pdf");

    try {
      // Clone the preview node to avoid affecting the original
      const node = previewRef.current.cloneNode(true) as HTMLDivElement;
      node.style.position = "absolute";
      node.style.left = "-9999px";
      document.body.appendChild(node);
      
      const canvas = await html2canvas(node, { 
        scale: 3,
        useCORS: true,
        logging: false
      });
      
      document.body.removeChild(node);
      
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: pageWidth > pageHeight ? "landscape" : "portrait",
        unit: "mm",
        format: [pageWidth, pageHeight]
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${companyName.replace(/\s+/g, "_")}_letterhead.pdf`);

      setExported(true);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setLoading(null);
    }
  }

  function exportWord() {
    if (!previewRef.current) return;
    setLoading("word");

    try {
      const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${previewRef.current.innerHTML}</body></html>`;
      const converted = HtmlDocx.asBlob(html);
      saveAs(converted, `${companyName.replace(/\s+/g, "_")}_letterhead.docx`);

      setExported(true);
    } catch (err) {
      console.error("Word export failed:", err);
    } finally {
      setLoading(null);
    }
  }

  // Template-specific styling
  const getTemplateStyle = () => {
    switch (template) {
      case "modern":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 p-8";
      case "minimal":
        return "bg-white p-4";
      case "bordered":
        return "bg-white border-4 border-gray-800 p-6";
      case "sidebar":
        return "flex bg-white";
      default: // classic
        return "bg-white p-8 border-l-4 border-blue-600";
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Put prestige on paper</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design and secure bespoke letterheads that embody authority, refinement, and trust —
            because your first impression should speak volumes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg space-y-4 h-fit">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Letterhead Builder</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Logo</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={onLogoUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                  <input
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                  <input
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={template}
                  onChange={(e) => setTemplate(e.target.value as any)}
                >
                  <option value="classic">Classic</option>
                  <option value="modern">Modern</option>
                  <option value="minimal">Minimal</option>
                  <option value="bordered">Bordered</option>
                  <option value="sidebar">Sidebar</option>
                </select>
              </div>

              <div className="pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={exportPDF}
                    disabled={loading === "pdf"}
                    className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading === "pdf" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Exporting...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Export PDF
                      </>
                    )}
                  </button>
                  <button
                    onClick={exportWord}
                    disabled={loading === "word"}
                    className="p-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading === "word" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Exporting...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Export Word
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Upsell CTA */}
            {exported && (
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md rounded-xl p-5 border border-blue-200 text-center">
                <p className="text-lg font-medium text-gray-800 mb-3">
                  You've already taken the first step — bring it to life with a professional
                  business website.
                </p>
                <a
                  href="/website"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-md"
                >
                  Launch your website today
                </a>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
              <div className="text-sm text-gray-500">
                {pageWidth}mm × {pageHeight}mm (A4)
              </div>
            </div>
            
            <div className="flex justify-center p-4 bg-gray-100 rounded-lg">
              <div 
                className="bg-white shadow-lg"
                style={{
                  width: `${pageWidth * 0.95}px`, // Scale down for display
                  height: `${pageHeight * 0.95}px`, // Scale down for display
                  overflow: "hidden"
                }}
              >
                <div
                  ref={previewRef}
                  className={`h-full ${getTemplateStyle()}`}
                  style={{
                    padding: `${margin}mm`,
                  }}
                >
                  {template === "sidebar" ? (
                    <div className="flex h-full">
                      <div className="w-1/4" style={{ backgroundColor: primaryColor }}>
                        <div className="p-4 text-white h-full flex flex-col justify-between">
                          <div>
                            {logoDataUrl && (
                              <div className="mb-4">
                                <img src={logoDataUrl} alt="Company Logo" className="max-w-full h-auto max-h-16" />
                              </div>
                            )}
                            <h1 className="text-xl font-bold mb-2">{companyName}</h1>
                            <p className="text-sm opacity-90">{tagline}</p>
                          </div>
                          <div className="text-xs opacity-80">
                            <p>{address}</p>
                            <p>{phone}</p>
                            <p>{email}</p>
                            <p>{website}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-3/4 p-6">
                        <div className="border-t border-gray-200 pt-6 mt-20">
                          <p className="text-gray-500">Your content goes here...</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h1 
                            className="text-2xl font-bold mb-1"
                            style={{ color: primaryColor }}
                          >
                            {companyName}
                          </h1>
                          <p 
                            className="text-sm"
                            style={{ color: secondaryColor }}
                          >
                            {tagline}
                          </p>
                        </div>
                        {logoDataUrl && (
                          <div>
                            <img src={logoDataUrl} alt="Company Logo" className="max-w-32 h-auto max-h-16" />
                          </div>
                        )}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-8 mt-16">
                        <p className="text-gray-500">Your content goes here...</p>
                      </div>
                      
                      <div className="mt-auto pt-8 text-xs text-gray-600 border-t border-gray-200">
                        <p>{address}</p>
                        <p>{phone} | {email} | {website}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              This is a preview of your letterhead. Click export buttons to download.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}