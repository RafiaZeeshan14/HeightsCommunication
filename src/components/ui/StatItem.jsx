export default function StatItem({ value, label, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[#7ac70c]/40 text-xl text-[#7ac70c]">
        <Icon aria-hidden="true" />
      </span>
      <span>
        <span className="block text-2xl font-bold leading-none text-white">{value}</span>
        <span className="block max-w-28 text-[0.68rem] font-medium leading-tight text-white/70">{label}</span>
      </span>
    </div>
  );
}
