import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionVision() {
  return (
   <section className="w-full min-h-[calc(100vh-4rem)] bg-[#F3F7F4] px-6 md:px-12 py-16 md:py-20 text-slate-800 select-none flex items-center">

      <div className="max-w-6xl mx-auto">

        {/* Section Intro */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#16A34A] mb-3">
            Our Purpose
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Built with purpose.
            <span className="text-[#16A34A]"> Driven by impact.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">

          {/* Vision Card */}
          <div className="group bg-white rounded-xl p-7 border border-slate-200 hover:border-green-200 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />

              <span className="relative text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Our Vision

                <span className="absolute left-0 -bottom-2 h-px w-full bg-[#16A34A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mb-3">
              A trusted technology partner for Africa.
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              To be the most trusted technology partner for businesses and
              institutions in East and Central Africa — recognized for
              innovation, reliability, and transformative impact.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#16A34A] transition-colors"
            >
              Learn more
              <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-xl p-7 border border-slate-200 hover:border-green-200 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />

              <span className="relative text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Our Mission

                <span className="absolute left-0 -bottom-2 h-px w-full bg-[#16A34A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mb-3">
              Technology that moves organizations forward.
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              To empower organizations across Rwanda and Africa with
              tailored, cost-efficient digital solutions that drive growth,
              streamline operations, and enhance visibility in an
              increasingly connected world.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#16A34A] transition-colors"
            >
              Learn more
              <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}