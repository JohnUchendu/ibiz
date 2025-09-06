"use client";
import { useState } from "react";
import { generateNames } from "@/utils/generateNames";


export default function BusinessNameForm({ onResults }: { onResults: (names: string[]) => void }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!keyword.trim()) return;
    const names = generateNames(keyword.trim());
    onResults(names);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword..."
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate
      </button>
    </form>
  );
}
