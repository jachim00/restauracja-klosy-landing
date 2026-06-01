/** Pasek faktów / wyróżników (np. „dla 10–50 osób", „menu na życzenie"). */
export function FactsBand({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-linen bg-linen/30">
      <div className="container-x grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <p className="font-serif text-2xl text-forest sm:text-3xl">{it.value}</p>
            <p className="mt-1 text-sm text-ink/65">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
