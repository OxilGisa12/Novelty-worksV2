  import React from 'react';
  import { MapPin, Rocket } from 'lucide-react';
  import Footer from '../components/Footer';

  const AboutUs = () => {
    return (
      <>
        <main className="bg-[#F3F7F4] text-slate-800">

          {/* HERO */}
        <section className="lg:h-[calc(100vh-4rem)] min-h-[680px] px-6 md:px-12 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full h-full py-16 lg:py-20">

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center h-full translate-y-4 sm:translate-y-6 lg:translate-y-0">

                {/* LEFT HERO GROUP */}
                <div className="max-w-2xl lg:translate-y-1 lg:mb-20">

<div className="flex items-center gap-3 mb-5">
  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
    About Novelty Works
  </span>
</div>

                  <h1 className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.06] text-slate-800">
                    Smart solutions.
                    <br />
                    <span className="text-[#16A34A]">
                      Local expertise.
                    </span>
                    <br />
                    Global standards.
                  </h1>

                 <p className="mt-7 text-base md:text-lg leading-8 text-slate-600 max-w-xl">
                    Novelty Works Ltd is a Kigali-based technology firm helping
                    organizations across Rwanda and East Africa make better use
                    of digital technology.
                  </p>

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xl">
                    We design, build, and manage technology around the way our
                    clients actually work — combining local understanding with
                    internationally recognized tools and standards.
                  </p>

                  <div className="mt-8 w-12 h-px bg-[#16A34A]" />

                  <div className="mt-8 pt-5 border-t border-slate-200">

                    <div className="flex items-center gap-0">

                      <div className="flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">
                          01
                        </span>

                        <span className="block mt-2 text-sm font-semibold text-slate-800">
                          Design
                        </span>

                        <span className="block mt-1 text-xs text-slate-500">
                          Understand the need.
                        </span>
                      </div>

                      <div className="w-10 md:w-16 h-px bg-slate-300 mb-7" />

                      <div className="flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">
                          02
                        </span>

                        <span className="block mt-2 text-sm font-semibold text-slate-800">
                          Build
                        </span>

                        <span className="block mt-1 text-xs text-slate-500">
                          Create the solution.
                        </span>
                      </div>

                      <div className="w-10 md:w-16 h-px bg-slate-300 mb-7" />

                      <div className="flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">
                          03
                        </span>

                        <span className="block mt-2 text-sm font-semibold text-slate-800">
                          Manage
                        </span>

                        <span className="block mt-1 text-xs text-slate-500">
                          Support and improve.
                        </span>
                      </div>

                    </div>

                  </div>

                </div>


                {/* RIGHT HERO GROUP */}
                <div className="relative flex items-center justify-center h-full lg:translate-y-1 lg:mb-50">

                  <div className="relative w-full max-w-[300px]">

                    <div className="flex flex-col items-center">

                      <div className="flex items-center gap-3">

                        <MapPin
                          size={28}
                          strokeWidth={1.6}
                          className="text-[#16A34A]"
                        />

                        <div>
                          <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Rooted in Rwanda
                          </span>

                          <span className="block mt-1 text-sm font-semibold text-slate-700">
                            Kigali, Rwanda
                          </span>
                        </div>

                      </div>

                      <div className="w-px h-16 bg-gradient-to-b from-[#16A34A] to-slate-300 mt-4" />

                      <div className="w-2 h-2 rounded-full bg-[#16A34A] mt-1" />

                    </div>

                    <div className="mt-8 text-center">

                      <p className="text-xs text-slate-400 leading-relaxed">
                        From understanding the challenge,
                        <br />
                        to building and managing what comes next.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* WHO WE ARE */}
          <section className="bg-white px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                <div className="lg:col-span-4">

                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-px bg-[#16A34A]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                      Who We Are
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Technology that understands the context.
                  </h2>

                </div>

                <div className="lg:col-span-7 lg:col-start-6">

                  <p className="text-lg text-slate-600 leading-relaxed">
                    Novelty Works was founded on a simple conviction: technology
                    only creates value when it is accessible, relevant, and
                    properly supported.
                  </p>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed">
                    Many organizations invest in technology that is too complex,
                    too expensive to maintain, or disconnected from the realities
                    of their operations. We take a different approach.
                  </p>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed">
                    We build and configure technology around our clients — their
                    workflows, budgets, people, and goals. This allows us to
                    create systems that are practical today while remaining
                    capable of growing tomorrow.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* HOW WE WORK */}
          <section className="bg-[#F3F7F4] px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="max-w-3xl">

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-[#16A34A]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                    How We Work
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Built around the client.
                </h2>

                <p className="mt-6 text-base text-slate-600 leading-relaxed">
                  Our engagements are based on understanding first, building
                  second, and supporting continuously.
                </p>

              </div>

              <div className="relative mt-14">

                <div className="hidden md:block absolute top-5 left-[8%] right-[8%] h-px bg-slate-300" />

                <div className="grid md:grid-cols-3 gap-10 md:gap-12">

                  <div className="relative">

                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#F3F7F4] border border-[#16A34A] text-sm font-bold text-[#16A34A]">
                      01
                    </div>

                    <div className="mt-7">

                      <h3 className="text-xl font-bold text-slate-800">
                        Understand
                      </h3>

                      <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm">
                        We begin with the organization's context, challenges,
                        workflows, budget, and goals.
                      </p>

                    </div>

                  </div>

                  <div className="relative">

                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#F3F7F4] border border-[#16A34A] text-sm font-bold text-[#16A34A]">
                      02
                    </div>

                    <div className="mt-7">

                      <h3 className="text-xl font-bold text-slate-800">
                        Build
                      </h3>

                      <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm">
                        We design and implement practical technology using tools
                        and standards suited to the organization.
                      </p>

                    </div>

                  </div>

                  <div className="relative">

                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#F3F7F4] border border-[#16A34A] text-sm font-bold text-[#16A34A]">
                      03
                    </div>

                    <div className="mt-7">

                      <h3 className="text-xl font-bold text-slate-800">
                        Support
                      </h3>

                      <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm">
                        We remain involved after delivery through ongoing
                        support, monitoring, and improvements.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* TRACK RECORD */}
          <section className="bg-white px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="grid lg:grid-cols-12 gap-12">

                <div className="lg:col-span-5">

                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-px bg-[#16A34A]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                      Our Work
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Technology with measurable outcomes.
                  </h2>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed">
                    Our work spans private businesses, cooperatives, student
                    networks, and other organizations across Rwanda.
                  </p>

                </div>

                <div className="lg:col-span-7">

                  <div className="border-t border-slate-200">

                    <div className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b border-slate-200">

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          Tasks Africa CBC
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Productivity systems and Google Workspace consolidation
                        </p>
                      </div>

                      <span className="text-lg font-bold text-[#16A34A]">
                        43%
                      </span>

                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b border-slate-200">

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          Biokube Rwanda
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Digital marketing, SEO, and online visibility
                        </p>
                      </div>

                      <span className="text-lg font-bold text-[#16A34A]">
                        17%
                      </span>

                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b border-slate-200">

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          RNSA-Intagamburuzwa
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Nationwide student fellowship platform and digital
                          communication infrastructure
                        </p>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Rwanda
                      </span>

                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b border-slate-200">

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          Umutaka Ltd
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Inventory system harmonization and real-time activity
                          tracking
                        </p>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Rwanda
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* OUR DIRECTION — MISSION & VISION */}
          <section className="bg-[#F3F7F4] px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="mb-16">

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-[#16A34A]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                    Our Direction
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                  Where we're going.
                </h2>

              </div>

              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                <div>

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 flex items-center justify-center border border-[#16A34A] text-[#16A34A]">

                      <Rocket
                        size={20}
                        strokeWidth={1.7}
                      />

                    </div>

                    <div>

                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                        Our Mission
                      </span>

                      <span className="text-xs text-slate-400">
                        What drives us
                      </span>

                    </div>

                  </div>

                  <h3 className="mt-8 text-2xl md:text-3xl font-bold leading-tight text-slate-800 max-w-lg">
                    Empowering organizations with technology that works for them.
                  </h3>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-xl">
                    To empower organizations across Rwanda and Africa with
                    tailored, cost-efficient digital solutions that drive growth,
                    streamline operations, and enhance visibility in an
                    increasingly connected world.
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 flex items-center justify-center border border-[#16A34A] text-[#16A34A]">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9z" />
                      </svg>

                    </div>

                    <div>

                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                        Our Vision
                      </span>

                      <span className="text-xs text-slate-400">
                        Where we're headed
                      </span>

                    </div>

                  </div>

                  <h3 className="mt-8 text-2xl md:text-3xl font-bold leading-tight text-slate-800 max-w-lg">
                    Becoming a trusted technology partner across Africa.
                  </h3>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-xl">
                    To be the most trusted technology partner for businesses and
                    institutions in East and Central Africa — recognized for
                    innovation, reliability, and transformative impact.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* TEAM */}
          <section className="bg-white px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="grid lg:grid-cols-12 gap-12">

                <div className="lg:col-span-4">

                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-px bg-[#16A34A]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                      Our Team
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Lean by design.
                    <br />
                    Capable by experience.
                  </h2>

                </div>

                <div className="lg:col-span-7 lg:col-start-6">

                  <p className="text-base text-slate-600 leading-relaxed">
                    Novelty Works is led by a core team of technology
                    professionals combining expertise across software engineering,
                    cloud infrastructure, digital marketing, and IT consulting.
                  </p>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed">
                    We also work with a trusted network of specialist associates
                    and partners, allowing us to scale our delivery capacity for
                    larger or more complex engagements while maintaining
                    responsiveness.
                  </p>

                  <p className="mt-6 text-base text-slate-500 leading-relaxed">
                    We are committed to developing local talent through continuous
                    professional development, industry certifications, and
                    partnerships with academic institutions in Rwanda.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* COMMITMENT */}
          <section className="bg-[#F3F7F4] px-6 md:px-12 py-24">

            <div className="max-w-7xl mx-auto">

              <div className="border-l-2 border-[#16A34A] pl-6 md:pl-8 max-w-3xl">

                <p className="text-xl md:text-2xl italic leading-relaxed text-slate-700">
                  "We don't just implement technology — we build partnerships.
                  Every client's success is a direct measure of our own."
                </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  — Novelty Works Ltd
                </p>

              </div>

            </div>

          </section>

        </main>

        <Footer />
      </>
    );
  };

  export default AboutUs;