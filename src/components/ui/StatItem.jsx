export default function StatItem({ value, label, icon: Icon, isPrimary = false }) {
  const iconColor = isPrimary
    ? "border-[#075eff]/55 text-[#075eff]"
    : "border-[#7ac70c]/50 text-[#7ac70c]";

  return (
    <div className="flex min-w-[150px] items-center gap-3">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border text-lg ${iconColor}`}>
        <Icon aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[1.75rem] font-semibold leading-none text-white">{value}</span>
        <span className="block max-w-32 text-[0.87rem] font-medium leading-tight text-white/70">{label}</span>
      </span>
    </div>
  );
}
