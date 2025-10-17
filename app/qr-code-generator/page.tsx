// // "use client";
// // import { useEffect, useRef, useState } from "react";
// // import QRCodeStyling from "qr-code-styling";

// // const qrCode = new QRCodeStyling({
// //   width: 300,
// //   height: 300,
// //   type: "svg",
// //   data: "https://example.com",
// //   dotsOptions: {
// //     color: "#000",
// //     type: "rounded",
// //   },
// //   backgroundOptions: {
// //     color: "#fff",
// //   },
// //   imageOptions: {
// //     crossOrigin: "anonymous",
// //     margin: 10,
// //   },
// // });

// // export default function QRGenerator() {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [url, setUrl] = useState("https://example.com");
// //   const [color, setColor] = useState("#000000");
// //   const [bgColor, setBgColor] = useState("#ffffff");
// //   const [logo, setLogo] = useState<string | null>(null);
// //   const [showUpsell, setShowUpsell] = useState(false);

// //   useEffect(() => {
// //     qrCode.append(ref.current!);
// //   }, []);

// //   const formatUrl = (input: string) => {
// //     if (!input.startsWith("http://") && !input.startsWith("https://")) {
// //       return `https://${input}`;
// //     }
// //     return input;
// //   };
// //   const updateQr = () => {
// //     qrCode.update({
// //       data: formatUrl(url), // ✅ always ensure it's a full URL
// //       dotsOptions: { color },
// //       backgroundOptions: { color: bgColor },
// //       image: logo || "",
// //     });
// //   };

// //   const download = async (ext: "png" | "svg" | "jpeg" | "webp") => {
// //     await qrCode.download({ name: "qr-code", extension: ext });
// //     setShowUpsell(true); // trigger upsell after download
// //   };

// //   return (
// //     <div className="p-6 flex flex-col gap-6 max-w-lg mx-auto">
// //       <h1 className="text-2xl font-bold">Free QR Code Generator</h1>

// //       <input
// //         type="text"
// //         placeholder="Enter your link"
// //         value={url}
// //         onChange={(e) => setUrl(e.target.value)}
// //         className="border p-2 rounded w-full"
// //       />

// //       <div className="flex gap-4">
// //         <label>Color:</label>
// //         <input
// //           type="color"
// //           value={color}
// //           onChange={(e) => setColor(e.target.value)}
// //         />
// //         <label>Background:</label>
// //         <input
// //           type="color"
// //           value={bgColor}
// //           onChange={(e) => setBgColor(e.target.value)}
// //         />
// //       </div>

// //       <input
// //         type="file"
// //         accept="image/*"
// //         onChange={(e) => {
// //           const file = e.target.files?.[0];
// //           if (file) setLogo(URL.createObjectURL(file));
// //         }}
// //       />

// //       <button onClick={updateQr} className="bg-blue-500 text-white p-2 rounded">
// //         Preview QR
// //       </button>

// //       {/* Preview Area */}
// //       <div className="border p-4 flex justify-center">
// //         <div ref={ref} />
// //       </div>

// //       {/* Download Options */}
// //       <div className="flex gap-2">
// //         <button
// //           onClick={() => download("png")}
// //           className="bg-gray-800 text-white p-2 rounded"
// //         >
// //           Download PNG
// //         </button>
// //         <button
// //           onClick={() => download("svg")}
// //           className="bg-gray-800 text-white p-2 rounded"
// //         >
// //           Download SVG
// //         </button>
// //         <button
// //           onClick={() => download("jpeg")}
// //           className="bg-gray-800 text-white p-2 rounded"
// //         >
// //           Download JPEG
// //         </button>
// //         <button
// //           onClick={() => download("webp")}
// //           className="bg-gray-800 text-white p-2 rounded"
// //         >
// //           Download WEBP
// //         </button>
// //         {/* <button onClick={() => download("")} className="bg-gray-800 text-white p-2 rounded">Download PDF</button> */}
// //       </div>

// //       {/* Upsell Modal */}
// //       {showUpsell && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //           <div className="bg-white rounded-xl p-6 max-w-sm text-center shadow-xl">
// //             <h2 className="text-xl font-bold mb-2">
// //               🚀 Point Your QR to More!
// //             </h2>
// //             <p className="mb-4">
// //               Instead of linking just a raw link, point your QR code to a
// //               professional <strong>website</strong> or{" "}
// //               <strong>online store</strong> that converts visitors into buyers.
// //             </p>
// //             <div className="flex flex-col gap-2">
// //               <a
// //                 href="/contact?type=website"
// //                 className="bg-blue-500 text-white px-4 py-2 rounded"
// //               >
// //                 Build My Website
// //               </a>
// //               <a
// //                 href="/contact?type=store"
// //                 className="bg-green-500 text-white px-4 py-2 rounded"
// //               >
// //                 Build My Online Store
// //               </a>
// //             </div>
// //             <button
// //               className="block mt-3 text-gray-500"
// //               onClick={() => setShowUpsell(false)}
// //             >
// //               Maybe later
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import QRCodeStyling from "qr-code-styling";

// const qrCode = new QRCodeStyling({
//   width: 300,
//   height: 300,
//   type: "svg",
//   data: "https://example.com",
//   dotsOptions: {
//     color: "#000",
//     type: "rounded",
//   },
//   backgroundOptions: {
//     color: "#fff",
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     margin: 10,
//   },
// });

// export default function QRGenerator() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [url, setUrl] = useState("https://example.com");
//   const [color, setColor] = useState("#000000");
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [logo, setLogo] = useState<string | null>(null);
//   const [showUpsell, setShowUpsell] = useState(false);

//   useEffect(() => {
//     qrCode.append(ref.current!);
//   }, []);

//   const formatUrl = (input: string) => {
//     if (!input.startsWith("http://") && !input.startsWith("https://")) {
//       return `https://${input}`;
//     }
//     return input;
//   };
  
//   const updateQr = () => {
//     qrCode.update({
//       data: formatUrl(url),
//       dotsOptions: { color },
//       backgroundOptions: { color: bgColor },
//       image: logo || "",
//     });
//   };

//   const download = async (ext: "png" | "svg" | "jpeg" | "webp") => {
//     await qrCode.download({ name: "qr-code", extension: ext });
//     setShowUpsell(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           QR Code Generator
//         </h1>

//         {/* URL Input */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Enter URL
//           </label>
//           <input
//             type="text"
//             placeholder="https://example.com"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         {/* Color Controls */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               QR Color
//             </label>
//             <div className="flex items-center">
//               <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 className="w-10 h-10 border-0 rounded cursor-pointer"
//               />
//               <span className="ml-2 text-sm text-gray-600">{color}</span>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Background
//             </label>
//             <div className="flex items-center">
//               <input
//                 type="color"
//                 value={bgColor}
//                 onChange={(e) => setBgColor(e.target.value)}
//                 className="w-10 h-10 border-0 rounded cursor-pointer"
//               />
//               <span className="ml-2 text-sm text-gray-600">{bgColor}</span>
//             </div>
//           </div>
//         </div>

//         {/* Logo Upload */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Logo (optional)
//           </label>
//           <label className="flex flex-col items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//             </svg>
//             <span className="text-sm text-gray-600">
//               {logo ? "Logo added" : "Click to upload logo"}
//             </span>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file) setLogo(URL.createObjectURL(file));
//               }}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {/* Preview Button */}
//         <button 
//           onClick={updateQr} 
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mb-6"
//         >
//           Generate QR Code
//         </button>

//         {/* QR Preview */}
//         <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm mb-6">
//           <div className="flex justify-center">
//             <div ref={ref} />
//           </div>
//         </div>

//         {/* Download Options */}
//         <div className="mb-6">
//           <h2 className="text-sm font-medium text-gray-700 mb-3 text-center">Download as</h2>
//           <div className="grid grid-cols-2 gap-2">
//             <button
//               onClick={() => download("png")}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm transition-colors"
//             >
//               PNG
//             </button>
//             <button
//               onClick={() => download("svg")}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm transition-colors"
//             >
//               SVG
//             </button>
//             <button
//               onClick={() => download("jpeg")}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm transition-colors"
//             >
//               JPEG
//             </button>
//             <button
//               onClick={() => download("webp")}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm transition-colors"
//             >
//               WEBP
//             </button>
//           </div>
//         </div>

//         {/* Upsell Modal */}
//         {showUpsell && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
//               <h2 className="text-xl font-bold mb-2 text-center">
//                 🚀 Enhance Your QR Code
//               </h2>
//               <p className="mb-4 text-gray-600 text-center">
//                 Upgrade to a professional website or online store that converts visitors into customers.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <a
//                   href="/website"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
//                 >
//                   Build My Website
//                 </a>
//                 <a
//                   href="/website/online-store"
//                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
//                 >
//                   Build My Online Store
//                 </a>
//               </div>
//               <button
//                 className="w-full mt-4 text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowUpsell(false)}
//               >
//                 Maybe later
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";
// import QRCodeStyling from "qr-code-styling";

// export default function QRGenerator() {
//   const ref = useRef<HTMLDivElement>(null);
//   const qrCodeRef = useRef<QRCodeStyling | null>(null);

//   const [url, setUrl] = useState("https://example.com");
//   const [color, setColor] = useState("#000000");
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [logo, setLogo] = useState<string | null>(null);
//   const [showUpsell, setShowUpsell] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return; // make sure it's client

//     // Create instance only once
//     if (!qrCodeRef.current) {
//       qrCodeRef.current = new QRCodeStyling({
//         width: 300,
//         height: 300,
//         type: "svg",
//         data: url,
//         dotsOptions: {
//           color,
//           type: "rounded",
//         },
//         backgroundOptions: {
//           color: bgColor,
//         },
//         imageOptions: {
//           crossOrigin: "anonymous",
//           margin: 10,
//         },
//       });
//     }

//     qrCodeRef.current.append(ref.current!);
//   }, []);

//   const formatUrl = (input: string) => {
//     if (!input.startsWith("http://") && !input.startsWith("https://")) {
//       return `https://${input}`;
//     }
//     return input;
//   };

//   const updateQr = () => {
//     qrCodeRef.current?.update({
//       data: formatUrl(url),
//       dotsOptions: { color },
//       backgroundOptions: { color: bgColor },
//       image: logo || "",
//     });
//   };

//   const download = async (ext: "png" | "svg" | "jpeg" | "webp") => {
//     await qrCodeRef.current?.download({ name: "qr-code", extension: ext });
//     setShowUpsell(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           QR Code Generator
//         </h1>

//         {/* URL Input */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Enter URL
//           </label>
//           <input
//             type="text"
//             placeholder="https://example.com"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         {/* Color Controls */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               QR Color
//             </label>
//             <input
//               type="color"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               className="w-10 h-10 border-0 rounded cursor-pointer"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Background
//             </label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//               className="w-10 h-10 border-0 rounded cursor-pointer"
//             />
//           </div>
//         </div>

//         {/* Logo Upload */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Logo (optional)
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) setLogo(URL.createObjectURL(file));
//             }}
//           />
//         </div>

//         {/* Buttons */}
//         <button
//           onClick={updateQr}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mb-6"
//         >
//           Generate QR Code
//         </button>

//         {/* QR Preview */}
//         <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm mb-6">
//           <div className="flex justify-center">
//             <div ref={ref} />
//           </div>
//         </div>

//         {/* Download Options */}
//         <div className="mb-6 grid grid-cols-2 gap-2">
//           {["png", "svg", "jpeg", "webp"].map((ext) => (
//             <button
//               key={ext}
//               onClick={() => download(ext as any)}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm transition-colors"
//             >
//               {ext.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Upsell Modal */}
//         {showUpsell && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
//               <h2 className="text-xl font-bold mb-2 text-center">
//                 🚀 Enhance Your QR Code
//               </h2>
//               <p className="mb-4 text-gray-600 text-center">
//                 Upgrade to a professional website or online store that converts
//                 visitors into customers.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <a
//                   href="/website"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
//                 >
//                   Build My Website
//                 </a>
//                 <a
//                   href="/website/online-store"
//                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
//                 >
//                   Build My Online Store
//                 </a>
//               </div>
//               <button
//                 className="w-full mt-4 text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowUpsell(false)}
//               >
//                 Maybe later
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import QRCodeStyling from 'qr-code-styling';
// import { useForm } from 'react-hook-form';

// interface FormData {
//   email: string;
//   url: string;
// }

// export default function QRGenerator() {
//   const ref = useRef<HTMLDivElement>(null);
//   const qrCodeRef = useRef<QRCodeStyling | null>(null);
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const [color, setColor] = useState('#000000');
//   const [bgColor, setBgColor] = useState('#ffffff');
//   const [logo, setLogo] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     if (!qrCodeRef.current) {
//       qrCodeRef.current = new QRCodeStyling({
//         width: 300,
//         height: 300,
//         type: 'svg',
//         data: 'https://example.com',
//         dotsOptions: { color, type: 'rounded' },
//         backgroundOptions: { color: bgColor },
//         imageOptions: { crossOrigin: 'anonymous', margin: 10 },
//       });
//     }

//     qrCodeRef.current.append(ref.current!);
//   }, []);

//   const formatUrl = (input: string) => {
//     if (!input.startsWith('http://') && !input.startsWith('https://')) {
//       return `https://${input}`;
//     }
//     return input;
//   };

//   const updateQr = (url: string) => {
//     qrCodeRef.current?.update({
//       data: formatUrl(url),
//       dotsOptions: { color },
//       backgroundOptions: { color: bgColor },
//       image: logo || '',
//     });
//   };

//   const onSubmit = async (data: FormData) => {
//     setLoading(true);
//     setMessage(null);
//     updateQr(data.url);

//     // Generate QR as base64 for email
//     const qrDataUrl = await qrCodeRef.current?.getRawData('png');
//     if (!qrDataUrl) {
//       setMessage('Failed to generate QR code.');
//       setLoading(false);
//       return;
//     }

//     // Send QR via Resend
//     try {
//       const response = await fetch('/api/send-qr', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: data.email, url: data.url, qrDataUrl }),
//       });

//       if (response.ok) {
//         setMessage('QR code sent! Check your email for your free QR and email marketing tips.');
//       } else {
//         setMessage('Failed to send QR. Try again.');
//       }
//     } catch (error) {
//       setMessage('Error sending QR. Please try again.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Free QR Code Generator
//         </h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Your Email (SMBs Get Free Email Tips!)
//             </label>
//             <input
//               {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
//               placeholder="yourname@business.com"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//           </div>

//           {/* URL Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Enter URL (e.g., PayPal, Shopify)
//             </label>
//             <input
//               {...register('url', { required: 'URL is required' })}
//               placeholder="https://example.com"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>}
//           </div>

//           {/* Color Controls */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">QR Color</label>
//               <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 className="w-10 h-10 border-0 rounded cursor-pointer"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Background</label>
//               <input
//                 type="color"
//                 value={bgColor}
//                 onChange={(e) => setBgColor(e.target.value)}
//                 className="w-10 h-10 border-0 rounded cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Logo Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Logo (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file) setLogo(URL.createObjectURL(file));
//               }}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
//           >
//             {loading ? 'Sending...' : 'Generate & Email QR Code'}
//           </button>
//         </form>

//         {/* QR Preview */}
//         <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm mt-6">
//           <div className="flex justify-center">
//             <div ref={ref} />
//           </div>
//         </div>

//         {/* Feedback Message */}
//         {message && (
//           <p className={`mt-4 text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';
import { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  url: string;
}

export default function QRGenerator() {
  const ref = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [logo, setLogo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'svg',
        data: 'https://example.com',
        dotsOptions: { color, type: 'rounded' },
        backgroundOptions: { color: bgColor },
        imageOptions: { crossOrigin: 'anonymous', margin: 10 },
      });
    }

    qrCodeRef.current.append(ref.current!);
  }, []);

  const formatUrl = (input: string) => {
    if (!input.startsWith('http://') && !input.startsWith('https://')) {
      return `https://${input}`;
    }
    return input;
  };

  const updateQr = (url: string) => {
    qrCodeRef.current?.update({
      data: formatUrl(url),
      dotsOptions: { color },
      backgroundOptions: { color: bgColor },
      image: logo || '',
    });
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage(null);
    updateQr(data.url);

    try {
      // Generate QR as Blob or Buffer
      const qrData = await qrCodeRef.current?.getRawData('png');
      if (!qrData) {
        setMessage('Failed to generate QR code.');
        setLoading(false);
        return;
      }

      // Convert to Blob (handle Buffer case)
      const blob = qrData instanceof Blob ? qrData : new Blob([new Uint8Array(qrData)], { type: 'image/png' });

      // Convert Blob to base64
      const qrBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            console.log('qrBase64:', reader.result.slice(0, 50)); // Debug
            resolve(reader.result.split(',')[1]); // Extract base64 part
          } else {
            reject(new Error('Failed to convert QR to base64'));
          }
        };
        reader.onerror = () => reject(new Error('FileReader error'));
        reader.readAsDataURL(blob);
      });

      // Send via Resend
      const response = await fetch('/api/send-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, url: data.url, qrBase64 }),
      });

      if (response.ok) {
        setMessage('QR code sent! Check your email for the attached QR and marketing tips.');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send QR: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('onSubmit error:', error);
      setMessage('Error sending QR. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Free QR Code Generator
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email (SMBs Get Free Email Tips!)
            </label>
            <input
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              placeholder="yourname@business.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter URL (e.g., PayPal, Shopify)
            </label>
            <input
              {...register('url', { required: 'URL is required' })}
              placeholder="https://example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">QR Color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 border-0 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Background</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 border-0 rounded cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setLogo(URL.createObjectURL(file));
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            {loading ? 'Sending...' : 'Generate & Email QR Code'}
          </button>
        </form>

        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm mt-6">
          <div className="flex justify-center">
            <div ref={ref} />
          </div>
        </div>

        {message && (
          <p className={`mt-4 text-center ${message.includes('Error') || message.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}