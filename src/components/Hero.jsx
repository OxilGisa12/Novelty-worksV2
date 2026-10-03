import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-[#F3F7F4] overflow-hidden flex items-center px-6 md:px-12 pt-8 lg:pt-0">

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-2xl lg:pt-10">

<h1 className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.06] text-slate-800">
  Rwanda's No. 1 Choice
  <br />
  for <span className="text-[#16A34A]">Smart</span> Digital
  <br />
  Solutions
</h1>

            <div className="mt-8 max-w-lg">

              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 mb-3">
                What we do
              </h2>

              <div className="space-y-2 text-base text-slate-600">

                <div className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold shrink-0">✓</span>
                  <span>
                    Software Development & Cloud Services Management
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold shrink-0">✓</span>
                  <span>
                    IT Services Consultancy & Digital Marketing & Visibility
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold shrink-0">✓</span>
                  <span>
                    Corporate Work Tools & Technology Integration & Support
                  </span>
                </div>

              </div>

            </div>

            <div className="mt-8 flex items-center gap-7">

            <a
              href="/reach-us"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#16A34A]
                text-white
                text-sm
                font-bold
                px-6
                py-2.5
                rounded-lg
                hover:bg-[#15803D]
                transition-colors
                shadow-sm
                cursor-pointer
              "
            >
              Get started
            </a>

              <a
                href='/services'
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-700
                  hover:text-[#16A34A]
                  transition-colors
                  cursor-pointer
                "
              >
                Explore services
                <span className="text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            <p className="mt-6 text-xs text-slate-500 max-w-[460px] leading-relaxed flex items-start gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-3.5
                  h-3.5
                  border
                  border-slate-300
                  rounded-full
                  text-[9px]
                  text-slate-500
                  shrink-0
                  mt-0.5
                "
              >
                i
              </span>

              <span>
                "We don't just implement technology — we build partnerships.
                Every client's success is a direct measure of our own"

                <span className="font-medium text-slate-600">
                  {' '}~ Novelty Works Ltd
                </span>
              </span>

            </p>

          </div>

          {/* RIGHT SIDE — BUSINESS GROWTH VISUAL */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">

            <div className="absolute inset-8 opacity-30">

              <div
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(to_right,#dbe5df_1px,transparent_1px),linear-gradient(to_bottom,#dbe5df_1px,transparent_1px)]
                  bg-[size:48px_48px]
                "
              />

            </div>

            <div className="absolute top-10 right-10 flex items-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Growth in motion
              </span>

            </div>

            <svg
              viewBox="0 0 650 500"
              className="relative w-full max-w-[650px] h-auto"
              fill="none"
            >

              <line
                x1="45"
                y1="410"
                x2="620"
                y2="410"
                stroke="#DDE6E0"
                strokeWidth="1"
              />

              <line
                x1="45"
                y1="330"
                x2="620"
                y2="330"
                stroke="#E6ECE8"
                strokeWidth="1"
              />

              <line
                x1="45"
                y1="250"
                x2="620"
                y2="250"
                stroke="#E6ECE8"
                strokeWidth="1"
              />

              <line
                x1="45"
                y1="170"
                x2="620"
                y2="170"
                stroke="#E6ECE8"
                strokeWidth="1"
              />

              <path
                d="
                  M45 410
                  C100 395 115 420 155 375
                  C190 335 210 390 250 350
                  C295 305 310 345 350 290
                  C390 235 410 285 445 215
                  C480 145 505 170 540 105
                  C565 65 590 70 620 35
                  L620 410
                  L45 410
                  Z
                "
                fill="#16A34A"
                opacity="0.035"
              />

              <path
                d="
                  M45 410
                  C100 395 115 420 155 375
                  C190 335 210 390 250 350
                  C295 305 310 345 350 290
                "
                stroke="#A8B4AC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 8"
              />

              <path
                d="
                  M350 290
                  C390 235 410 285 445 215
                  C480 145 505 170 540 105
                  C565 65 590 70 620 35
                "
                stroke="#16A34A"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M594 38 L620 35 L615 61"
                stroke="#16A34A"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="45"
                cy="410"
                r="7"
                fill="#F3F7F4"
                stroke="#94A3B8"
                strokeWidth="3"
              />

              <circle
                cx="350"
                cy="290"
                r="8"
                fill="#F3F7F4"
                stroke="#16A34A"
                strokeWidth="4"
              />

              <circle
                cx="620"
                cy="35"
                r="9"
                fill="#16A34A"
              />

              <circle
                cx="620"
                cy="35"
                r="18"
                stroke="#16A34A"
                strokeWidth="1"
                opacity="0.22"
              />

              <text
                x="45"
                y="448"
                fill="#7F8C84"
                fontSize="10"
                fontWeight="700"
                letterSpacing="2"
                textAnchor="start"
              >
                YOU
              </text>

              <line
                x1="350"
                y1="290"
                x2="350"
                y2="326"
                stroke="#16A34A"
                strokeWidth="1"
              />

              <text
                x="350"
                y="346"
                fill="#16A34A"
                fontSize="10"
                fontWeight="700"
                letterSpacing="1.4"
                textAnchor="middle"
              >
                WE BUILD TOGETHER
              </text>

              <text
                x="608"
                y="82"
                fill="#16A34A"
                fontSize="10"
                fontWeight="700"
                letterSpacing="1.6"
                textAnchor="end"
              >
                NOVELTY WORKS
              </text>

              <line
                x1="620"
                y1="52"
                x2="620"
                y2="70"
                stroke="#16A34A"
                strokeWidth="1"
                opacity="0.6"
              />

            </svg>

            <div className="absolute bottom-8 right-6 max-w-[220px]">

              <p className="text-xs leading-relaxed text-slate-500">
                From challenges and uncertainty to{' '}
                <span className="font-semibold text-slate-700">
                  stronger digital growth.
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}