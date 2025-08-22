"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";

export default function IDCardMaker() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [org, setOrg] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [template, setTemplate] = useState("corporate");

  const cardRef = useRef<HTMLDivElement>(null);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [250, 400],
    });
    pdf.addImage(imgData, "PNG", 0, 0, 250, 400);
    pdf.save("id-card.pdf");
  };

  // Template styles
  const templateStyles: Record<string, string> = {
    corporate: "border-blue-600",
    school: "border-green-600",
    church: "border-purple-600",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-2xl font-bold">Simple ID Card Maker</h1>
      <h1 className="text-3xl font-bold text-center mb-6">
      Brand credibility, executive-grade identification
      </h1>
      <p className="text-center text-gray-600 mb-8">
       Custom ID cards that make your team look and feel official
      </p>
      {/* Inputs */}
      <div className="w-full max-w-md space-y-3">
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Role (Staff / Student / Member)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Input
          placeholder="Organization (Company / School / Church)"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />

        <label className="text-sm text-gray-600">Upload Logo</label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e, setLogo)}
        />

        <label className="text-sm text-gray-600">Upload Photo</label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e, setPhoto)}
        />

        <label className="text-sm text-gray-600">Choose Template</label>
        <Select value={template} onValueChange={setTemplate}>
          <SelectTrigger>
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="school">School</SelectItem>
            <SelectItem value="church">Church</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ID Card Preview */}
      <Card
        ref={cardRef}
        className={`w-[250px] h-[400px] border-4 ${templateStyles[template]} flex flex-col items-center justify-start p-4 shadow-md bg-white`}
      >
        {/* Logo */}
        <div className="w-full flex justify-center mb-4">
          {logo ? (
            <img src={logo} alt="Logo" className="h-10 object-contain" />
          ) : (
            <div className="h-10 w-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
              Logo
            </div>
          )}
        </div>

        {/* Photo */}
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover border"
          />
        ) : (
          <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
            Photo
          </div>
        )}

        {/* Info */}
        <div className="text-center space-y-1">
          <h2 className="font-bold text-lg">{name || "Full Name"}</h2>
          <p className="text-sm text-gray-600">{role || "Role"}</p>
          <p className="text-sm text-gray-500">{org || "Organization"}</p>
        </div>
      </Card>

      {/* Download */}
      <Button onClick={downloadPDF} className="w-full max-w-md">
        Export as PDF
      </Button>

      <PromoBanner/>
      <PromoPopup/>
    </div>
  );
}
