export default function AdSlot({ label = "Ad Space" }: { label?: string }) {
  // Replace this div with <ins class="adsbygoogle"...> after AdSense approval.
  return (
    <div className="my-6 w-full h-24 bg-gray-200 rounded flex items-center justify-center text-sm">
      {label}
    </div>
  );
}
