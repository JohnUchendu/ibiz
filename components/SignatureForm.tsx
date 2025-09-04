"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignatureForm({ data, setData }: any) {
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow space-y-3">
      {["name", "title", "company", "phone", "email", "website", "address", "linkedin", "twitter", "instagram"].map((field) => (
        <div key={field}>
          <Label className="capitalize">{field}</Label>
          <Input name={field} value={data[field]} onChange={handleChange} />
        </div>
      ))}
    </div>
  );
}
