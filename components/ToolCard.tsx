import Link from "next/link";

export default function ToolCard({
  title,
  desc,
  href,
}: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block rounded-lg border bg-white p-5 hover:shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </Link>
  );
}
