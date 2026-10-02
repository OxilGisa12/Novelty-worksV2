import React from 'react';
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Headphones,
  Megaphone,
  Settings2,
  Users,
} from 'lucide-react';
import StartConversation from '../components/StartConversation';
import Footer from '../components/Footer';

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Software Development',
    short:
      'Custom digital systems built around your organization, workflows, and goals.',
    description:
      'We design and develop practical web, mobile, and internal business systems that solve specific operational challenges and can grow with your organization.',
    includes: [
      'Business and management systems',
      'Websites and web applications',
      'Mobile applications',
      'Internal portals and dashboards',
      'Workflow and process automation',
      'Database-driven systems',
      'API and third-party integrations',
      'Custom reporting tools',
    ],
    outcome:
      'Replace repetitive manual processes with technology that fits the way your organization actually works.',
  },
  {
    number: '02',
    icon: Cloud,
    title: 'Cloud Services Management',
    short:
      'Reliable, secure, and cost-conscious cloud environments managed for your organization.',
    description:
      'We help organizations move to, configure, and manage cloud infrastructure while keeping reliability, security, performance, and cost under control.',
    includes: [
      'Cloud migration and setup',
      'Google Cloud management',
      'AWS environment management',
      'Microsoft Azure management',
      'Cloud configuration and optimization',
      'Backup and recovery setup',
      'Security and access configuration',
      'Ongoing monitoring and support',
    ],
    outcome:
      'Build a cloud environment that is reliable today and ready to scale as your organization grows.',
  },
  {
    number: '03',
    icon: Settings2,
    title: 'IT Services Consultancy',
    short:
      'Independent technology guidance for organizations making important IT decisions.',
    description:
      'We assess your current technology environment, identify gaps, and help you make practical decisions about infrastructure, software, procurement, and digital transformation.',
    includes: [
      'Technology and IT audits',
      'Infrastructure planning',
      'Digital transformation roadmaps',
      'Technology procurement guidance',
      'Software and platform selection',
      'IT strategy and planning',
      'Implementation guidance',
      'Technology improvement reviews',
    ],
    outcome:
      'Make technology decisions based on your actual needs, budget, and long-term goals.',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Digital Marketing & Online Visibility',
    short:
      'Build a stronger digital presence and make it easier for people to find and engage with your organization.',
    description:
      'From content and social media to websites, SEO, digital campaigns, and online events, we help organizations build and manage a consistent digital presence.',
    includes: [
      'Digital billboard design',
      'Social media account management',
      'Social media content creation',
      'Website design and development',
      'SEO optimization',
      'Google Business Profile setup',
      'Targeted online advertising',
      'Online seminars and webinar support',
      'Digital visibility strategy',
      'Performance analytics and reporting',
    ],
    outcome:
      'Turn your online presence into a practical channel for visibility, engagement, and business growth.',
    plans: [
      {
        name: 'Starter',
        description: 'For organizations establishing their digital presence.',
        items: [
          'Social media support',
          'Basic content creation',
          'Digital presence setup',
        ],
        price: 'Request pricing',
      },
      {
        name: 'Growth',
        description: 'For organizations looking to grow their online visibility.',
        items: [
          'Content management',
          'SEO optimization',
          'Campaign support',
          'Performance reporting',
        ],
        price: 'Request pricing',
      },
      {
        name: 'Custom',
        description: 'For organizations requiring a broader digital strategy.',
        items: [
          'Full digital strategy',
          'Website and SEO',
          'Campaign management',
          'Ongoing visibility support',
        ],
        price: 'Request pricing',
      },
    ],
  },
  {
    number: '05',
    icon: Users,
    title: 'Corporate Work Tools',
    short:
      'Digital workplace systems that help teams collaborate, communicate, and get more done.',
    description:
      'We deploy and manage workplace platforms that bring communication, documents, collaboration, and internal workflows into a more organized digital environment.',
    includes: [
      'Google Workspace setup',
      'Microsoft 365 deployment',
      'Business email setup',
      'Content management systems',
      'Internal company portals',
      'Document management',
      'Team collaboration tools',
      'User and account management',
      'Productivity system configuration',
    ],
    outcome:
      'Give your team the tools and structure they need to collaborate efficiently from one connected workplace.',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Technology Integration & Support',
    short:
      'Connect your systems and keep your technology working reliably after implementation.',
    description:
      'We connect business systems that need to work together and provide ongoing technical support to keep critical technology reliable and useful.',
    includes: [
      'ERP and CRM integrations',
      'Payment gateway integrations',
      'Inventory system integrations',
      'API integrations',
      'System troubleshooting',
      'Technical maintenance',
      'System monitoring',
      'Ongoing technical support',
      'SLA-based support contracts',
    ],
    outcome:
      'Reduce technology friction by keeping your systems connected, maintained, and supported.',
  },
];

const principles = [
  {
    title: 'Customized solutions',
    description:
      'We build and configure technology around your organization rather than forcing your organization into a generic system.',
  },
  {
    title: 'Long-term support',
    description:
      'Our relationship does not end when a project goes live. We can continue supporting, monitoring, and improving your technology.',
  },
  {
    title: 'Local expertise',
    description:
      'Our solutions consider Rwanda’s business environment, payment systems, connectivity realities, and local operating context.',
  },
  {
    title: 'Global standards',
    description:
      'We combine local understanding with established technologies, frameworks, and international best practices.',
  },
  {
    title: 'Cost-conscious technology',
    description:
      'We consider total cost of ownership and recommend solutions that make sense for your budget today and your growth tomorrow.',
  },
  {
    title: 'Built to scale',
    description:
      'Our systems and technology recommendations are designed so organizations can grow without unnecessary technology overhauls.',
  },
];

function ServiceSection({ service, reverse }) {
  const Icon = service.icon;

  return (
    <section
      className={`px-6 md:px-12 py-20 md:py-24 ${
        reverse ? 'bg-white' : 'bg-[#F3F7F4]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-7">
              <span className="text-xs font-bold tracking-[0.18em] text-[#16A34A]">
                {service.number}
              </span>

              <span className="w-10 h-px bg-[#16A34A]" />
            </div>

            <div className="w-11 h-11 border border-[#16A34A]/30 flex items-center justify-center mb-6">
              <Icon
                size={21}
                strokeWidth={1.7}
                className="text-[#16A34A]"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 leading-tight">
              {service.title}
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
              {service.short}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500 max-w-xl">
              {service.description}
            </p>

            <a
              href="/reach-us"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#16A34A] hover:text-green-700 transition-colors"
            >
              Discuss this service
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-slate-200">
              <div className="py-5 border-b border-slate-200">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  What we do
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-4 border-b border-slate-200 sm:pr-8"
                  >
                    <Check
                      size={15}
                      strokeWidth={2}
                      className="text-[#16A34A] mt-0.5 shrink-0"
                    />

                    <span className="text-sm leading-relaxed text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l-2 border-[#16A34A] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
                  The goal
                </p>

                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                  {service.outcome}
                </p>
              </div>
            </div>

            {service.plans && (
              <div className="mt-12">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A]">
                      Service plans
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Flexible packages based on your organization’s needs.
                    </p>
                  </div>

                  <span className="hidden sm:block text-xs text-slate-400">
                    Pricing available on request
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                  {service.plans.map((plan) => (
                    <div key={plan.name} className="bg-white p-6">
                      <p className="text-lg font-semibold text-slate-800">
                        {plan.name}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-slate-500 min-h-[42px]">
                        {plan.description}
                      </p>

                      <div className="mt-5 space-y-2.5">
                        {plan.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2"
                          >
                            <Check
                              size={13}
                              strokeWidth={2}
                              className="text-[#16A34A] mt-0.5 shrink-0"
                            />

                            <span className="text-xs text-slate-600">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <p className="text-xs font-semibold text-[#16A34A]">
                          {plan.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="bg-[#F3F7F4] px-6 md:px-12 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-7xl mx-auto w-full py-20">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

              {/* HERO CONTENT CONTAINER */}
              <div className="lg:col-span-7">
                <div className="max-w-2xl lg:-translate-y-10">

                  <div className="flex items-center gap-3 mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                      Our Services
                    </p>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.06] text-slate-800">
                    Technology built
                    <br />
                    <span className="text-[#16A34A]">
                      around your organization.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-slate-600">
                    From custom software and cloud management to digital
                    visibility and workplace technology, we build practical
                    solutions around real organizations, real challenges, and
                    real goals.
                  </p>

                  {/* HORIZONTAL GREEN ACCENT */}
                  <div className="mt-8 w-12 h-px bg-[#16A34A]" />

                  {/* CTA BUTTONS */}
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                    >
                      Explore Services
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </a>

                    <a
                      href="/reach-us"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#16A34A] transition-colors"
                    >
                      Start a conversation
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </a>
                  </div>

                </div>
              </div>

              {/* CORE SERVICE AREAS */}
              <div className="lg:col-span-5">
                <div className="border border-slate-200 p-7 md:p-9">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Core service areas
                    </p>

                    <span className="text-xs font-semibold text-[#16A34A]">
                      06
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200">
                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <a
                          key={service.number}
                          href={`#service-${service.number}`}
                          className="group flex items-center gap-4 py-5"
                        >
                          <span className="text-[11px] font-semibold text-slate-400 w-5">
                            {service.number}
                          </span>

                          <Icon
                            size={18}
                            strokeWidth={1.7}
                            className="text-[#16A34A] shrink-0"
                          />

                          <span className="text-sm font-medium text-slate-700 group-hover:text-[#16A34A] transition-colors">
                            {service.title}
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.7}
                            className="ml-auto text-slate-300 group-hover:text-[#16A34A] transition-colors"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE INTRO */}
        <section
          id="services"
          className="bg-white px-6 md:px-12 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  What we do
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                  One technology partner.
                  <br />
                  Multiple ways to move forward.
                </h2>
              </div>

              <p className="md:col-span-5 text-sm md:text-base leading-7 text-slate-600">
                Our services are designed to work independently or together,
                allowing organizations to start with one challenge and expand
                their technology as their needs evolve.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        {services.map((service, index) => (
          <div key={service.number} id={`service-${service.number}`}>
            <ServiceSection
              service={service}
              reverse={index % 2 !== 0}
            />
          </div>
        ))}

        {/* WHY NOVELTY WORKS */}
        <section className="bg-slate-900 text-white px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#16A34A]" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                    Why Novelty Works
                  </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Technology that makes sense for your organization.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  We combine local understanding with professional technology
                  practices to deliver solutions that are practical,
                  maintainable, and ready to grow.
                </p>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-10">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className="py-7 border-t border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-semibold text-[#16A34A] mt-1">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {principle.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* DELIVERY APPROACH */}
        <section className="bg-white px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                How we work
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                From challenge to working solution.
              </h2>

              <p className="mt-5 text-sm md:text-base leading-7 text-slate-600">
                We keep the process clear, collaborative, and focused on the
                outcome your organization actually needs.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 border-t border-slate-200">

              <div className="py-8 md:pr-10 md:border-r border-slate-200">
                <span className="text-xs font-bold text-[#16A34A]">01</span>

                <h3 className="mt-4 text-xl font-semibold text-slate-800">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We understand your organization, existing systems, goals,
                  constraints, and the problem that needs solving.
                </p>
              </div>

              <div className="py-8 md:px-10 md:border-r border-slate-200">
                <span className="text-xs font-bold text-[#16A34A]">02</span>

                <h3 className="mt-4 text-xl font-semibold text-slate-800">
                  Build
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We design, configure, integrate, or develop the right
                  technology around the requirements we have identified.
                </p>
              </div>

              <div className="py-8 md:pl-10">
                <span className="text-xs font-bold text-[#16A34A]">03</span>

                <h3 className="mt-4 text-xl font-semibold text-slate-800">
                  Support
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We stay involved where needed through training, maintenance,
                  monitoring, and ongoing technical support.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <StartConversation />
      </main>

      <Footer />
    </>
  );
}