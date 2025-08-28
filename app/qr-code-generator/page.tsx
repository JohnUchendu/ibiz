"use client";

import { useState } from "react";

import AdSlot from "@/components/AdSlot";
import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";
import PaidQRCodeGenerator from "@/components/QrCodeSite";
import TestimonialCarousel from "@/components/Testimonial";

const NIGERIAN_BANKS = [
  "Access Bank",
  "Access Bank (Diamond)",
  "Citibank",
  "Ecobank",
  "Fidelity Bank",
  "First Bank",
  "FCMB",
  "FSDH",
  "Globus Bank",
  "GTBank",
  "Heritage Bank",
  "Jaiz Bank",
  "Keystone Bank",
  "Kuda",
  "Moniepoint MFB",
  "Opay",
  "PalmPay",
  "Polaris Bank",
  "Providus Bank",
  "Stanbic IBTC",
  "Standard Chartered",
  "Sterling Bank",
  "SunTrust",
  "Titan Trust",
  "Union Bank",
  "UBA",
  "Unity Bank",
  "Wema Bank",
  "Zenith Bank",
];

export default function QRCodeGeneratorPage() {
  const [mode, setMode] = useState<"link" | "bank">("link");
  const [form, setForm] = useState({
    businessName: "",
    bank: "",
    accountNumber: "",
    amount: "",
    link: "",
  });
  const [qrImage, setQrImage] = useState("");
  const [payload, setPayload] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const generate = async () => {
    const res = await fetch("/api/generate-qr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, ...form }),
    });
    const data = await res.json();
    setQrImage(data.qrImage);
    setPayload(data.payload);
  };

  const downloadPNG = () => {
    if (!qrImage) return;
    const a = document.createElement("a");
    a.href = qrImage;
    a.download = "qr-code.png";
    a.click();
  };

  const printQR = () => {
    if (!qrImage) return;

    const printWindow = window.open("", "_blank", "width=400,height=400");
    if (printWindow) {
      printWindow.document.write(`
      <html>
        <head><title>Print QR Code</title></head>
        <body style="text-align:center; margin:0; padding:20px;">
          <img src="${qrImage}" style="max-width:100%;" />
          <script>window.onload = function() { window.print(); }</script>
        </body>
      </html>
    `);
      printWindow.document.close();
    }
  };

  return (
    <>
    
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
         Instant access for clients, Effortless sharing
        </h1>
        <p className="mt-2 text-gray-600">
          create professional QR codes that streamline client engagement
        </p>

        <AdSlot />

        <div className="mt-4 bg-white border rounded-lg p-5 space-y-5">
          <div className="flex gap-4 text-sm">
            <button
              className={`px-3 py-1 rounded border ${
                mode === "link" ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setMode("link")}
            >
              Payment Link
            </button>
            <button
              className={`px-3 py-1 rounded border ${
                mode === "bank" ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setMode("bank")}
            >
              Bank Transfer Info
            </button>
          </div>

          {mode === "link" ? (
            <div className="space-y-3">
              <input
                name="link"
                placeholder="Paste Paystack/Flutterwave/Moniepoint payment link"
                value={form.link}
                onChange={onChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ) : (
            <div className="space-y-3">
              <input
                name="businessName"
                placeholder="Business Name"
                value={form.businessName}
                onChange={onChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="bank"
                value={form.bank}
                onChange={onChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Bank</option>
                {NIGERIAN_BANKS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <input
                name="accountNumber"
                placeholder="Account Number"
                value={form.accountNumber}
                onChange={onChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="amount"
                placeholder="Amount (optional)"
                value={form.amount}
                onChange={onChange}
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <button
            onClick={generate}
            className="w-full bg-blue-600 text-white rounded py-2"
          >
            Generate QR
          </button>

          {qrImage && (
            <div className="pt-4 border-t">
              <div className="text-sm text-gray-600">Embedded data:</div>
              <pre className="mt-1 whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border">
                {payload}
              </pre>

              <div className="mt-4 flex flex-col items-center">
                <img
                  src={qrImage}
                  alt="QR"
                  className="border p-2 rounded max-w-xs"
                />
                <button
                  onClick={downloadPNG}
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Download PNG
                </button>
                <button
                  onClick={printQR}
                  className="bg-purple-600 text-white px-4 py-2 rounded"
                >
                  Print QR
                </button>
              </div>
            </div>
          )}
        </div>

        <AdSlot />

        <section className="mt-10 prose max-w-none">
          <h2>How it works</h2>
          <ol>
            <li>
              Choose <strong>Payment Link</strong> (best experience) or{" "}
              <strong>Bank Transfer Info</strong>.
            </li>
            <li>
              Fill in the fields and click <em>Generate</em>.
            </li>
            <li>
              Download and print the QR to display at your counter, stall, or
              event.
            </li>
          </ol>
          <h3>Tips for Nigerian businesses</h3>
          <ul>
            <li>
              Use Paystack/Flutterwave payment links for one-tap checkout after
              scanning.
            </li>
            <li>
              For bank transfer, customers will see account details on scan and
              pay from their app.
            </li>
          </ul>
        </section>
        <section>
          <PaidQRCodeGenerator/>
        </section>
      </main>
      <TestimonialCarousel/>
      <PromoBanner/>
      <PromoPopup/>
    </>
  );
}
