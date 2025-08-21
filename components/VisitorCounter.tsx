// "use client";

// import { useEffect, useState } from "react";

// export default function VisitorCounter() {
//   const [count, setCount] = useState<number | null>(null);

//   useEffect(() => {
//     async function fetchCount() {
//       try {
//         const res = await fetch("/api/visitor-count");
//         const data = await res.json();
//         setCount(data.count);
//       } catch (error) {
//         console.error("Error loading visitor count:", error);
//       }
//     }

//     fetchCount();
//   }, []);

//   return (
//     <span className="font-semibold">
//       {count !== null ? `${count} visitors` : "Loading..."}
//     </span>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/visitor-count");
        const data = await res.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error loading visitor count:", error);
      }
    }

    fetchCount();

    // Optional: auto-refresh every 10s
    const interval = setInterval(fetchCount, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-semibold">
      {count !== null ? `${count} visitors` : "Loading..."}
    </span>
  );
}
