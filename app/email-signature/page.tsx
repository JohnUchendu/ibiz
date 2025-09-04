"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SignatureForm from "@/components/SignatureForm";
import SignaturePreview from "@/components/SignaturePreview";
import SignatureExport from "@/components/SignatureExport";

export default function SignaturePage() {
  const [data, setData] = useState({
    name: "John Doe",
    title: "CEO",
    company: "Ibiz",
    phone: "+234 800 000 0000",
    email: "john@ibiz.name.ng",
    website: "https://ibiz.name.ng",
    address: "Lagos, Nigeria",
    linkedin: "",
    twitter: "",
    instagram: "",
    image: "",
  });

  const [template, setTemplate] = useState<"template1" | "template2" | "template3">("template1");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Free Email Signature Generator</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <SignatureForm data={data} setData={setData} />
          </CardContent>
        </Card>

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Preview & Export</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs value={template} onValueChange={(val) => setTemplate(val as any)} className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="template1">Template 1</TabsTrigger>
                <TabsTrigger value="template2">Template 2</TabsTrigger>
                <TabsTrigger value="template3">Template 3</TabsTrigger>
              </TabsList>

              <TabsContent value="template1">
                <SignaturePreview data={data} template="template1" />
              </TabsContent>
              <TabsContent value="template2">
                <SignaturePreview data={data} template="template2" />
              </TabsContent>
              <TabsContent value="template3">
                <SignaturePreview data={data} template="template3" />
              </TabsContent>
            </Tabs>

            <SignatureExport data={data} template={template} />
          </CardContent>
        </Card>
      </div>

     
    </div>
  );
}
