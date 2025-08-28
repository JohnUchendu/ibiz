// components/ContactSection.tsx

export default function ContactSection() {
  const contacts = [
    {
      label: "General Inquiries",
      email: "info@ibiz.name.ng",
    },
    {
      label: "Customer Support",
      email: "support@ibiz.name.ng",
    },
    {
      label: "Billing & Receipts",
      email: "billing@ibiz.name.ng",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 rounded-2xl shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Contact
      </h2>
      <ul className="space-y-4">
        {contacts.map((c) => (
          <li key={c.email} className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="font-medium text-gray-700">{c.label}</span>
            <a
              href={`mailto:${c.email}`}
              className="text-blue-600 hover:underline mt-2 md:mt-0"
            >
              {c.email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
