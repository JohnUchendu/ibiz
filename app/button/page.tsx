"use client";

export default function SendTestEmail() {
  const sendEmail = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "johnchnd195", name: "John" }),
    });

    const data = await res.json();
    console.log(data);
    alert("Email sent ✅");
  };

  return (
    <button onClick={sendEmail} className="bg-blue-600 text-white px-4 py-2 rounded">
      Send Test Email
    </button>
  );
}
