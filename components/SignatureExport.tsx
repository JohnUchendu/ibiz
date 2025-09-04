"use client";

import { Button } from "@/components/ui/button";

export default function SignatureExport({ template }: any) {
  const copyHtml = () => {
    const html = document.getElementById("signature-preview")?.innerHTML;
    if (html) {
      navigator.clipboard.writeText(html);
      alert("✅ Signature HTML copied!");
    }
  };

  const downloadHtml = () => {
    const html = document.getElementById("signature-preview")?.innerHTML;
    if (html) {
      const blob = new Blob([html], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `signature-${template}.html`;
      link.click();
    }
  };

  return (
    <div className="flex gap-3">
      <Button onClick={copyHtml}>Copy HTML</Button>
      <Button variant="outline" onClick={downloadHtml}>Download</Button>
    </div>
  );
}
