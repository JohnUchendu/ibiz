"use client";

import React, { useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import HtmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";

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

  async function onLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function exportPDF() {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({ unit: "mm", format: [pageWidth, pageHeight] });
    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save(`${companyName.replace(/\s+/g, "_")}_letterhead.pdf`);
  }

  function exportWord() {
    if (!previewRef.current) return;
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${previewRef.current.innerHTML}</body></html>`;
    const converted = HtmlDocx.asBlob(html);
    saveAs(converted, `${companyName.replace(/\s+/g, "_")}_letterhead.docx`);
  }

  function reset() {
    setCompanyName("Your Company Ltd.");
    setTagline("Professional | Reliable | Trusted");
    setAddress("123 Business Street, Lagos, Nigeria");
    setPhone("+234 800 000 0000");
    setEmail("hello@company.com");
    setWebsite("www.company.com");
    setLogoDataUrl(null);
    setPrimaryColor("#0f172a");
    setSecondaryColor("#6b7280");
    setTemplate("classic");
    setPageWidth(210);
    setPageHeight(297);
    setMargin(20);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Put prestige on paper
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Design and secure bespoke letterheads that embody authority, refinement,
        and trust - because your first impression should speak volumes.{" "}
      </p>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white p-4 rounded-2xl shadow space-y-3">
            <h2 className="text-lg font-semibold">Letterhead Builder</h2>

            <label className="block text-sm font-medium">Logo</label>
            <input type="file" accept="image/*" onChange={onLogoUpload} />

            <label className="block text-sm font-medium">Company name</label>
            <input
              className="w-full p-2 border rounded"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <label className="block text-sm font-medium">Tagline</label>
            <input
              className="w-full p-2 border rounded"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />

            <label className="block text-sm font-medium">Address</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label className="block text-sm font-medium">Phone</label>
            <input
              className="w-full p-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block text-sm font-medium">Website</label>
            <input
              className="w-full p-2 border rounded"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <label className="block text-sm font-medium">Template</label>
            <select
              className="w-full p-2 border rounded"
              value={template}
              onChange={(e) => setTemplate(e.target.value as any)}
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="minimal">Minimal (simple top header)</option>
              <option value="bordered">Bordered (frame around page)</option>
              <option value="sidebar">Sidebar (colored left bar)</option>
            </select>

            <label className="block text-sm font-medium">Page Width (mm)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={pageWidth}
              onChange={(e) => setPageWidth(Number(e.target.value))}
            />

            <label className="block text-sm font-medium">
              Page Height (mm)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={pageHeight}
              onChange={(e) => setPageHeight(Number(e.target.value))}
            />

            <label className="block text-sm font-medium">Margin (mm)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
            />

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={exportPDF}
                className="p-2 bg-sky-600 text-white rounded"
              >
                Export PDF
              </button>
              <button
                onClick={exportWord}
                className="p-2 bg-green-600 text-white rounded"
              >
                Export Word
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button onClick={reset} className="p-2 border rounded">
                Reset
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(
                    previewRef.current?.innerHTML || ""
                  );
                }}
                className="p-2 border rounded"
              >
                Copy HTML
              </button>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-4 rounded-2xl shadow">
            <h3 className="text-sm font-medium mb-2">Preview</h3>
            <div className="border rounded overflow-hidden">
              <div
                ref={previewRef}
                className="bg-white"
                style={{
                  width: `${pageWidth}mm`,
                  minHeight: `${pageHeight}mm`,
                  padding: `${margin}mm`,
                }}
              >
                {/* Different templates */}
                {template === "classic" && (
                  <div
                    style={{
                      borderBottom: `2px solid ${secondaryColor}`,
                      paddingBottom: 12,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      {logoDataUrl ? (
                        <img
                          src={logoDataUrl}
                          style={{
                            width: 80,
                            height: 80,
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 80,
                            height: 80,
                            background: "#eee",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          LOGO
                        </div>
                      )}
                      <div>
                        <div
                          style={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: primaryColor,
                          }}
                        >
                          {companyName}
                        </div>
                        <div style={{ fontSize: 12, color: secondaryColor }}>
                          {tagline}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 12,
                        color: secondaryColor,
                      }}
                    >
                      <div>{address}</div>
                      <div>
                        {phone} | {email}
                      </div>
                      <div>{website}</div>
                    </div>
                  </div>
                )}

                {template === "modern" && (
                  <div
                    style={{
                      textAlign: "center",
                      borderBottom: `2px solid ${secondaryColor}`,
                      paddingBottom: 12,
                    }}
                  >
                    {logoDataUrl ? (
                      <img
                        src={logoDataUrl}
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                          margin: "0 auto",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 100,
                          height: 100,
                          background: "#eee",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        LOGO
                      </div>
                    )}
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: primaryColor,
                      }}
                    >
                      {companyName}
                    </div>
                    <div style={{ fontSize: 13, color: secondaryColor }}>
                      {tagline}
                    </div>
                  </div>
                )}

                {template === "minimal" && (
                  <div
                    style={{
                      borderBottom: `1px solid ${secondaryColor}`,
                      paddingBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: primaryColor,
                      }}
                    >
                      {companyName}
                    </div>
                    <div style={{ fontSize: 12, color: secondaryColor }}>
                      {tagline}
                    </div>
                  </div>
                )}

                {template === "bordered" && (
                  <div
                    style={{ border: `3px solid ${primaryColor}`, padding: 16 }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: primaryColor,
                      }}
                    >
                      {companyName}
                    </div>
                    <div style={{ fontSize: 12, color: secondaryColor }}>
                      {tagline}
                    </div>
                    <div style={{ marginTop: 12, fontSize: 12 }}>
                      {address} | {phone} | {email} | {website}
                    </div>
                  </div>
                )}

                {template === "sidebar" && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 60,
                        background: primaryColor,
                        color: "white",
                        padding: 8,
                        fontWeight: 700,
                      }}
                    >
                      {companyName}
                    </div>
                    <div style={{ flex: 1, paddingLeft: 16 }}>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: primaryColor,
                        }}
                      >
                        {tagline}
                      </div>
                      <div style={{ fontSize: 12, color: secondaryColor }}>
                        {address} | {phone} | {email} | {website}
                      </div>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div
                  style={{ paddingTop: 36, paddingBottom: 36, minHeight: 420 }}
                >
                  <p>Dear [Recipient],</p>
                  <p style={{ marginTop: 16 }}>
                    This is a sample letter on your company letterhead. Replace
                    this paragraph with your actual letter content.
                  </p>
                  <p style={{ marginTop: 16 }}>Sincerely,</p>
                  <p style={{ marginTop: 36 }}>{companyName}</p>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${secondaryColor}`,
                    paddingTop: 12,
                    fontSize: 12,
                    color: secondaryColor,
                    textAlign: "center",
                  }}
                >
                  {address} | {phone} | {email} | {website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromoBanner />
      <PromoPopup />
    </>
  );
}
