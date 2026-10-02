import {
  Code2,
  ClipboardCheck,
  Megaphone,
  BriefcaseBusiness,
  Cable,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Software & Cloud',
    description:
      'Websites, applications, business systems, automation, and cloud infrastructure built around your organization.',
    points: ['Websites', 'Mobile Apps', 'Cloud'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'IT Consultancy',
    description:
      'Practical technology advice, planning, and digital strategy for better technology decisions.',
    points: ['IT Planning', 'Strategy'],
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Digital Marketing',
    description:
      'Build your online presence, reach the right audience, and strengthen your digital visibility.',
    points: ['SEO', 'Social Media'],
    icon: Megaphone,
  },
  {
    number: '04',
    title: 'Workplace Technology',
    description:
      'Digital tools that help your team communicate, collaborate, manage work, and stay organized.',
    points: ['Google Workspace', 'Microsoft 365'],
    icon: BriefcaseBusiness,
  },
  {
    number: '05',
    title: 'Integration & Support',
    description:
      'Connect your systems and keep your technology running with ongoing technical support.',
    points: ['Integration', 'Support'],
    icon: Cable,
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] bg-white px-6 md:px-12 flex items-center">

      <div className="max-w-7xl mx-auto w-full py-10 md:py-12">

        {/* HEADING */}
        <div className="max-w-2xl mb-8 md:mb-9">

          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#16A34A]" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A]">
              What We Do
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-800">
            Technology that works
            <span className="text-[#16A34A]"> for you.</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
            Practical digital solutions designed around your organization,
            your people, and the way you work.
          </p>

        </div>


        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.number}
                className={`
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  flex
                  flex-col
                  min-h-[245px]
                  transition-all
                  duration-300
                  hover:border-green-200
                  hover:bg-[#FBFDFC]
                  ${isFeatured ? 'lg:col-span-2' : 'lg:col-span-1'}
                `}
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-300 group-hover:text-[#16A34A] transition-colors">
                    {service.number}
                  </span>

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-slate-300 group-hover:text-[#16A34A] transition-colors"
                  />

                </div>


                {/* MAIN */}
                <div className="mt-6">

                  <h3
                    className={`
                      font-bold tracking-tight text-slate-800
                      ${isFeatured ? 'text-xl md:text-2xl' : 'text-base'}
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      mt-2.5 text-slate-500 leading-relaxed
                      ${isFeatured ? 'text-sm md:text-base max-w-md' : 'text-xs'}
                    `}
                  >
                    {service.description}
                  </p>

                </div>


                {/* BOTTOM */}
                <div className="mt-auto pt-6">

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">

                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="text-[9px] font-medium text-slate-400"
                      >
                        {point}
                      </span>
                    ))}

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span
                      className="
                        h-px
                        w-7
                        bg-slate-200
                        group-hover:w-12
                        group-hover:bg-[#16A34A]
                        transition-all
                        duration-500
                      "
                    />

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="
                        text-slate-300
                        group-hover:text-[#16A34A]
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* FOOTER */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <p className="text-xs text-slate-400">
            From digital foundations to everyday technical support.
          </p>

          <a
            href="/services"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              font-bold
              text-slate-700
              hover:text-[#16A34A]
              transition-colors
            "
          >
            View all services

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                transition-transform
              "
            />
          </a>

        </div>

      </div>

    </section>
  );
}