"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-md w-full shadow-lg rounded-2xl border border-gray-200">
        <CardContent className="p-6 text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            ✅ Payment Successful!
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for your payment.  
            Please check your email for further information from  
            <span className="font-semibold"> support@ibiz.name.ng</span>.
          </p>
          <Link href="/">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
