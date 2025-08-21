"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";

type Entry = {
  id: number;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
};

export default function AccountingLedger() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [debit, setDebit] = useState("");
  const [credit, setCredit] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ledger");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("ledger", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (!date || !description) return;
    const debitNum = parseFloat(debit) || 0;
    const creditNum = parseFloat(credit) || 0;
    const lastBalance = entries[0]?.balance || 0;
    const newBalance = lastBalance + debitNum - creditNum;

    const newEntry: Entry = {
      id: Date.now(),
      date,
      description,
      debit: debitNum,
      credit: creditNum,
      balance: newBalance,
    };

    setEntries([newEntry, ...entries]);
    setDate("");
    setDescription("");
    setDebit("");
    setCredit("");
  };

  const exportCSV = () => {
    const header = "Date,Description,Debit,Credit,Balance\n";
    const rows = entries
      .map(
        (e) =>
          `${e.date},"${e.description}",${e.debit},${e.credit},${e.balance}`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ledger.csv";
    a.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Simple Ledger Report", 10, 10);
    let y = 20;
    entries.forEach((e) => {
      doc.text(
        `${e.date} | ${e.description} | Dr: ₦${e.debit} | Cr: ₦${e.credit} | Bal: ₦${e.balance}`,
        10,
        y
      );
      y += 8;
    });
    doc.save("ledger.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Simple Accounting Ledger</h1>

      {/* Entry Form */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h2 className="text-lg font-semibold mb-3">Add Entry</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Debit"
            value={debit}
            onChange={(e) => setDebit(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Credit"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            className="p-2 border rounded-md"
          />
          <button
            onClick={addEntry}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={exportCSV}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Export CSV
        </button>
        <button
          onClick={exportPDF}
          className="bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Export PDF
        </button>
      </div>

      {/* Ledger Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Debit</th>
            <th className="border p-2">Credit</th>
            <th className="border p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id}>
              <td className="border p-2">{e.date}</td>
              <td className="border p-2">{e.description}</td>
              <td className="border p-2 text-green-700">₦{e.debit}</td>
              <td className="border p-2 text-red-700">₦{e.credit}</td>
              <td className="border p-2 font-semibold">₦{e.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
