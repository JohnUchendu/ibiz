// import Link from "next/link";

// export default function ToolCard({
//   title,
//   desc,
//   href,
// }: { title: string; desc: string; href: string }) {
//   return (
//     <Link href={href} className="block rounded-lg border bg-white p-5 hover:shadow">
//       <h3 className="font-semibold text-blue-600 ">{title}</h3>
//       <p className="mt-2 text-sm text-gray-600">{desc}</p>
//     </Link>
//   );
// }

import Link from "next/link";
import {
  QrCode,
  FileText,
  Receipt,
  IdCard,
  Globe,
  Rocket,
  Mail,
  Search,
  Gauge,
  PenTool,
  Store,
  MailsIcon,
  Handshake,
} from "lucide-react";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "QR Code Generator": <QrCode className="h-6 w-6 text-blue-600" />,
  "Invoice Generator": <FileText className="h-6 w-6 text-green-600" />,
  "Receipt Generator": <Receipt className="h-6 w-6 text-purple-600" />,
  "ID Card  Design Maker": <IdCard className="h-6 w-6 text-pink-600" />,
  "SEO Audit Tool": <Search className="h-6 w-6 text-orange-600" />,
  "Website Builder": <Rocket className="h-6 w-6 text-indigo-600" />,
  "Letterhead Maker": <PenTool className="h-6 w-6 text-cyan-600" />,
  "Business Email": <Mail className="h-6 w-6 text-teal-600" />,
  "Domain Checker": <Globe className="h-6 w-6 text-red-600" />,
  "Website Speed Test": <Gauge className="h-6 w-6 text-amber-600" />,

  "Email Signature": <MailsIcon className="h-6 w-6 text-amber-600" />,
  "Online Store": <Store className="h-6 w-6 text-cyan-600" />,
  "Business Name Generator": <Handshake className="h-6 w-6 text-green-600" />,
};

export default function ToolCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition">
          {iconMap[title] ?? <Rocket className="h-6 w-6 text-gray-500" />}
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
