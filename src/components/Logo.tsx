export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/img_rb.png"
        alt="Mbyte logo"
        className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
      />
    </div>
  );
}
