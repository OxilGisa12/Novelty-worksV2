export default function TrustStrip() {
  const trustItems = [
    '100% Tailored Solutions',
    'Local Expertise',
    'Global Standards',
    'SLA-Backed Support',
    'Trusted Technology Partner',
  ];

  return (
    <section className="w-full bg-white border-y border-slate-100 px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-7">
              <span className="text-xs md:text-sm font-medium text-slate-500">
                {item}
              </span>

              {index !== trustItems.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}