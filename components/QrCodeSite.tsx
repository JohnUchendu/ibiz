// // // "use client";
// // // import React, { useState } from "react";
// // // import QRCode from "qrcode";
// // // import { useRouter, useSearchParams } from "next/navigation";

// // // export default function PaidQRCodeGenerator() {
// // //   const [url, setUrl] = useState("");
// // //   const [qr, setQr] = useState("");
// // //   const searchParams = useSearchParams();
// // //   const router = useRouter();

// // //   // Check payment success from query string
// // //   const isPaid = searchParams.get("status") === "success";

// // //   const generateQr = async () => {
// // //     try {
// // //       const qrData = await QRCode.toDataURL(url);
// // //       setQr(qrData);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handlePayment = () => {
// // //     // Replace with your real Paystack payment link
// // //     router.push("https://paystack.com/pay/your-payment-link");
// // //   };

// // //   const downloadQr = () => {
// // //     const link = document.createElement("a");
// // //     link.href = qr;
// // //     link.download = "qrcode.png";
// // //     link.click();
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center p-6 space-y-4">
// // //       <input
// // //         type="text"
// // //         placeholder="Enter website URL"
// // //         className="border p-2 rounded w-80"
// // //         value={url}
// // //         onChange={(e) => setUrl(e.target.value)}
// // //       />
// // //       <button
// // //         onClick={generateQr}
// // //         className="bg-blue-600 text-white px-4 py-2 rounded"
// // //       >
// // //         Generate QR
// // //       </button>

// // //       {qr && (
// // //         <div className="flex flex-col items-center space-y-4">
// // //           <img src={qr} alt="Generated QR" />
// // //           {!isPaid ? (
// // //             <button
// // //               onClick={handlePayment}
// // //               className="bg-green-600 text-white px-4 py-2 rounded"
// // //             >
// // //               Pay to Download
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={downloadQr}
// // //               className="bg-purple-600 text-white px-4 py-2 rounded"
// // //             >
// // //               Download QR
// // //             </button>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import QRCode from "qrcode";

// // export default function QrCodeTool() {
// //   const [url, setUrl] = useState("");
// //   const [qr, setQr] = useState<string | null>(null);
// //   const [paid, setPaid] = useState(false);

// //   const generateQr = async () => {
// //     if (!url) return;
// //     try {
// //       const qrData = await QRCode.toDataURL(url);
// //       setQr(qrData);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handlePayment = () => {
// //     // Your Paystack link (replace with your real one)
// //     window.open("https://paystack.com/pay/your-payment-link", "_blank");
// //     setPaid(true); // mock success (in real use, verify callback)
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-2xl font-bold mb-4 text-center">
// //         Convert Your Menu, Store or Website into a QR Code
// //       </h1>
// //       <p className="mb-6 text-center text-gray-600">
// //         Pay once and get your custom QR code for just{" "}
// //         <span className="font-bold">₦40,000</span>.
// //       </p>

// //       {!paid ? (
// //         <button
// //           onClick={handlePayment}
// //           className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md"
// //         >
// //           Pay ₦40,000 to Unlock QR Tool
// //         </button>
// //       ) : (
// //         <div className="w-full max-w-md bg-white shadow-md p-6 rounded-xl">
// //           <input
// //             type="text"
// //             value={url}
// //             onChange={(e) => setUrl(e.target.value)}
// //             placeholder="Enter your website or store URL"
// //             className="w-full p-3 border rounded-lg mb-4"
// //           />
// //           <button
// //             onClick={generateQr}
// //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
// //           >
// //             Generate QR Code
// //           </button>

// //           {qr && (
// //             <div className="mt-6 text-center">
// //               <img src={qr} alt="Generated QR Code" className="mx-auto" />
// //               <a
// //                 href={qr}
// //                 download="qrcode.png"
// //                 className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
// //               >
// //                 Download QR Code
// //               </a>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import QRCode from "qrcode";

// export default function QRCodePage() {
//   const [url, setUrl] = useState("");
//   const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
//   const [paid, setPaid] = useState(false);

//   const generateQR = async () => {
//     try {
//       // With watermark (for preview)
//       const qr = await QRCode.toDataURL(url, { width: 300 });
//       setQrDataUrl(qr);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // After payment redirect (Paystack will return with query params)
//   useState(() => {
//     const params = new URLSearchParams(window.location.search);
//     if (params.get("paid") === "true") {
//       setPaid(true);
//     }
//   });

//   const downloadQR = async () => {
//     const qrClean = await QRCode.toDataURL(url, { width: 600 }); // No watermark
//     const a = document.createElement("a");
//     a.href = qrClean;
//     a.download = "qr-code.png";
//     a.click();
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
     
//       <h1 className="text-2xl font-bold mb-4 text-center">
//       Convert Your Menu, Store or Website into a QR Code
//      </h1>
//      <p className="mb-6 text-center text-gray-600">
//        Pay once and get your custom QR code {""}
//        <span className="font-bold">₦39,897</span>
//      </p>

//       <input
//         type="text"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter your website URL"
//         className="border p-2 w-full mb-4"
//       />

//       <button
//         onClick={generateQR}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Generate Preview
//       </button>

//       {qrDataUrl && (
//         <div className="mt-4">
//           <h2 className="font-semibold">Preview (with watermark)</h2>
//           <div className="relative inline-block">
//             <img src={qrDataUrl} alt="QR Preview" className="w-64 h-64" />
//             {/* Simple watermark */}
//             <span className="absolute inset-0 flex items-center justify-center text-red-600 font-bold opacity-60 rotate-45">
//               WATERMARK
//             </span>
//           </div>
//         </div>
//       )}

//       {/* If not paid yet → show Paystack button */}
//       {!paid && qrDataUrl && (
//         <a
//           href="https://paystack.com/pay/YOURPAYLINK"
//           className="mt-6 block bg-green-600 text-white text-center py-2 rounded"
//         >
//           Get QR Code
//         </a>
//       )}

//       {/* If paid → auto-download */}
//       {paid && (
//         <div className="mt-6">
//           <button
//             onClick={downloadQR}
//             className="bg-purple-600 text-white px-4 py-2 rounded"
//           >
//             Download Your QR Code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function PaidQrWithWatermarkedPreview() {
  const [rawUrl, setRawUrl] = useState("");
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const autoDownloadedRef = useRef(false);

  // TODO: replace with your actual Paystack payment link (amount = ₦40,000)
  const PAYSTACK_PAYMENT_LINK = "https://paystack.com/pay/YOUR_LINK";

  // --- Helpers ---
  const sanitizeUrl = (u: string) => {
    let v = (u || "").trim();
    if (!v) return "";
    if (!/^https?:\/\//i.test(v)) v = "https://" + v;
    return v;
  };

  const drawQRToCanvas = async (canvas: HTMLCanvasElement, value: string, size = 320) => {
    // Low error correction + small margin => easier to break scanning on preview
    await new Promise<void>((resolve, reject) => {
      QRCode.toCanvas(
        canvas,
        value,
        { width: size, margin: 1, errorCorrectionLevel: "L" },
        (err) => (err ? reject(err) : resolve())
      );
    });
  };

  const watermarkAndBreakScan = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = canvas.width;
    ctx.save();

    // 1) Block two finder patterns (top-left & top-right) to kill detection
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = 0.95;
    const fp = Math.floor(s * 0.22);
    ctx.fillRect(0, 0, fp, fp);               // top-left
    ctx.fillRect(s - fp, 0, fp, fp);          // top-right

    // 2) Cross bars through the center to scramble modules further
    const bar = Math.max(10, Math.floor(s * 0.10));
    ctx.fillRect(Math.floor(s * 0.2), Math.floor(s * 0.5 - bar / 2), Math.floor(s * 0.6), bar);
    ctx.fillRect(Math.floor(s * 0.5 - bar / 2), Math.floor(s * 0.2), bar, Math.floor(s * 0.6));

    // 3) Big "PREVIEW" watermark
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = "#d00";
    ctx.translate(s / 2, s / 2);
    ctx.rotate((-45 * Math.PI) / 180);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${Math.floor(s * 0.18)}px sans-serif`;
    ctx.fillText("PREVIEW", 0, 0);

    ctx.restore();
  };

  const makePreview = async () => {
    const url = sanitizeUrl(rawUrl);
    if (!url) return;
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
      canvasRef.current.width = 320;
      canvasRef.current.height = 320;
    }
    const c = canvasRef.current;
    await drawQRToCanvas(c, url, 320);
    watermarkAndBreakScan(c);
    setPreviewDataUrl(c.toDataURL("image/png"));
  };

  // Store URL and go pay
  const goPay = () => {
    const url = sanitizeUrl(rawUrl);
    if (!url) return;
    // persist for post-payment auto-download
    localStorage.setItem("qr.url", url);
    // redirect to Paystack
    window.location.href = PAYSTACK_PAYMENT_LINK;
  };

  // After redirect back from Paystack: auto-generate clean QR + auto-download once
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const paid =
      sp.get("status") === "success" ||
      sp.get("paid") === "true" ||
      sp.get("message")?.toLowerCase() === "approved";

    if (!paid || autoDownloadedRef.current) return;

    const url = localStorage.getItem("qr.url");
    if (!url) return;

    autoDownloadedRef.current = true;

    // Make a clean, high-res QR and auto-download
    (async () => {
      const dataUrl = await QRCode.toDataURL(url, {
        width: 1024,
        margin: 2,
        errorCorrectionLevel: "H",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "qr-code.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      // Clear persisted URL
      localStorage.removeItem("qr.url");
    })();
  }, []);

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Convert Your Menu, Store & Website to an Easy-to-Scan QR
      </h1>
      <p className="mt-2 text-gray-600">
        Preview is watermarked & non-scannable. Pay <strong>₦40,000</strong> to download the clean QR.
      </p>

      <div className="mt-6 bg-white border rounded-lg p-5 space-y-4">
        <input
          type="text"
          placeholder="Enter website / URL (e.g. example.com or https://example.com)"
          value={rawUrl}
          onChange={(e) => setRawUrl(e.target.value)}
          className="w-full p-3 border rounded"
        />

        <div className="flex gap-3">
          <button
            onClick={makePreview}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded py-2"
          >
            Generate Preview
          </button>

          <button
            onClick={goPay}
            disabled={!previewDataUrl}
            className={`flex-1 rounded py-2 ${
              previewDataUrl
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            title={!previewDataUrl ? "Generate a preview first" : ""}
          >
           Get Your QR Code
          </button>
        </div>

        {previewDataUrl && (
          <div className="pt-4 border-t">
            <div className="text-sm text-gray-600 mb-2">Preview (watermarked, won’t scan):</div>
            <img
              src={previewDataUrl}
              alt="QR preview (watermarked)"
              className="border p-2 rounded w-64 h-64 object-contain"
            />
          </div>
        )}
      </div>

      {/* Hidden canvas for building the preview */}
      <canvas ref={canvasRef} className="hidden" width={320} height={320} />
    </main>
  );
}
