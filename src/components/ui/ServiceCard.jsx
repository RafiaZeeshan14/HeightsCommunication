export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#7ac70c]/50">
      <span className={`grid h-16 w-16 place-items-center rounded-full border border-current bg-white/[0.03] text-2xl ${service.color}`}>
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-6 min-h-14 text-xl font-bold leading-tight text-white">{service.title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
        {service.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/70" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
