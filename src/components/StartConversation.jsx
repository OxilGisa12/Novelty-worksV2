import {
  ArrowUpRight,
} from 'lucide-react';

export default function StartConversation() {
  return (
    <div className="bg-[#F3F7F4] px-6 md:px-12 py-16 md:py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">

        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A] mb-4">
            Start a conversation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Have an idea?
            <br />
            <span className="text-[#16A34A]">Let's build it.</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            Tell us what you're trying to achieve. From the first brainstorm
            to the final solution, we'll work with you to make it happen.
          </p>
        </div>

        <a
          href="/reach-us"
          className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0"
        >
          Get Started
          <ArrowUpRight size={17} strokeWidth={1.8} />
        </a>

      </div>
    </div>
  );
}