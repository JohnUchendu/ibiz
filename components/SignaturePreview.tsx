import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SignaturePreview({ data, template }: any) {
  if (template === "template1") {
    return (
      <div className="p-4 border rounded-lg bg-white shadow" id="signature-preview">
        <table>
          <tbody>
            <tr>
              {data.image && (
                <td className="pr-4 align-top">
                  <img src={data.image} alt="profile" width={72} height={72} className="rounded-full border" />
                </td>
              )}
              <td className="align-top">
                <p className="text-lg font-bold">{data.name}</p>
                <p className="text-sm text-gray-600">{data.title} @ {data.company}</p>
                <p className="text-sm flex items-center gap-1"><Phone size={14} /> {data.phone}</p>
                <p className="text-sm flex items-center gap-1"><Mail size={14} /> {data.email}</p>
                <p className="text-sm flex items-center gap-1"><Globe size={14} /> {data.website}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (template === "template2") {
    return (
      <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow" id="signature-preview">
        <p className="text-xl font-semibold text-blue-700">{data.name}</p>
        <p className="text-sm">{data.title} | {data.company}</p>
        <div className="mt-2 space-y-1 text-sm">
          <p><Phone className="inline mr-1" size={14} /> {data.phone}</p>
          <p><Mail className="inline mr-1" size={14} /> {data.email}</p>
          <p><Globe className="inline mr-1" size={14} /> {data.website}</p>
        </div>
      </div>
    );
  }

  if (template === "template3") {
    return (
      <div className="p-4 border-t-4 border-green-600 bg-white shadow rounded-lg" id="signature-preview">
        <p className="text-lg font-bold text-green-700">{data.name}</p>
        <p className="text-gray-700 italic">{data.title} – {data.company}</p>
        <div className="mt-2 flex flex-col gap-1 text-sm">
          <span className="flex items-center gap-1"><Mail size={14} /> {data.email}</span>
          <span className="flex items-center gap-1"><Phone size={14} /> {data.phone}</span>
          <span className="flex items-center gap-1"><Globe size={14} /> {data.website}</span>
          {data.address && <span className="flex items-center gap-1"><MapPin size={14} /> {data.address}</span>}
        </div>
        <div className="mt-3 flex gap-2">
          {data.linkedin && <a href={data.linkedin}><Linkedin size={18} className="text-blue-700" /></a>}
          {data.twitter && <a href={data.twitter}><Twitter size={18} className="text-sky-500" /></a>}
          {data.instagram && <a href={data.instagram}><Instagram size={18} className="text-pink-500" /></a>}
        </div>
      </div>
    );
  }

  return null;
}
