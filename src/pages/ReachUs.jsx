import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Settings2,
  Users,
} from 'lucide-react';
import Footer from '../components/Footer';

const serviceOptions = [
  {
    number: '01',
    icon: Code2,
    title: 'Software Development',
    description:
      'Custom web, mobile, management, and automation systems built around your organization.',
  },
  {
    number: '02',
    icon: Cloud,
    title: 'Cloud Services Management',
    description:
      'Cloud migration, configuration, management, security, reliability, and cost efficiency.',
  },
  {
    number: '03',
    icon: Settings2,
    title: 'IT Services Consultancy',
    description:
      'Technology audits, infrastructure planning, procurement guidance, and digital transformation.',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Digital Marketing & Online Visibility',
    description:
      'SEO, social media, Google Business, digital campaigns, and performance analytics.',
  },
  {
    number: '05',
    icon: Users,
    title: 'Corporate Work Tools',
    description:
      'Google Workspace, Microsoft 365, CMS platforms, and internal productivity systems.',
  },
  {
    number: '06',
    icon: Settings2,
    title: 'Technology Integration & Support',
    description:
      'System integrations, troubleshooting, maintenance, monitoring, and ongoing technical support.',
  },
];

const initialForm = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ReachUs() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New inquiry from ${form.name || 'Website visitor'}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Organization: ${form.organization}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}`
    );

    window.location.href = `mailto:info@noveltyworks.rw?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <main className="bg-[#F3F7F4] text-slate-800">

        {/* HERO */}
        <section className="bg-[#F3F7F4] px-6 md:px-12 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-7xl mx-auto w-full py-20">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

              {/* HERO CONTENT */}
              <div className="lg:col-span-7 mb-7">
                <div className="max-w-2xl">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A] mb-5">
                    Reach Us
                  </p>

                  <h1 className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.06] text-slate-800">
                    Let&apos;s build what
                    <br />
                    <span className="text-[#16A34A]">
                      your organization needs.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-xl text-base md:text-lg leading-8 text-slate-600">
                    Whether you are looking to digitize your operations,
                    expand your online reach, migrate to the cloud, or build
                    a custom software solution, start a conversation with
                    Novelty Works.
                  </p>

                  {/* GREEN ACCENT LINE */}
                  <div className="mt-8 w-12 h-px bg-[#16A34A]" />

                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">

                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                    >
                      Start a conversation
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </a>

                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#16A34A] transition-colors"
                    >
                      Explore services
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </a>

                  </div>

                </div>
              </div>


              {/* CONTACT SUMMARY */}
              <div className="lg:col-span-5">

                <div className="border border-slate-200 bg-white p-7 md:p-9">

                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Contact information
                    </p>

                    <span className="text-xs font-semibold text-[#16A34A]">
                      KIGALI
                    </span>

                  </div>

                  <div className="divide-y divide-slate-200">

                    <div className="flex items-start gap-4 py-6">

                      <MapPin
                        size={19}
                        strokeWidth={1.7}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <p className="text-sm font-semibold text-slate-800">
                          Kigali, Rwanda
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          Serving organizations across Rwanda and the wider
                          East African region.
                        </p>

                      </div>

                    </div>


                    <div className="flex items-start gap-4 py-6">

                      <Mail
                        size={19}
                        strokeWidth={1.7}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          Email
                        </p>

                        <a
                          href="mailto:info@noveltyworks.rw"
                          className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-[#16A34A] transition-colors"
                        >
                          info@noveltyworks.rw
                        </a>

                      </div>

                    </div>


                    <div className="flex items-start gap-4 py-6">

                      <Phone
                        size={19}
                        strokeWidth={1.7}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          Phone
                        </p>

                        <a
                          href="tel:+250794590000"
                          className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-[#16A34A] transition-colors"
                        >
                          +250 794 590 000
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* CONTACT FORM */}
        <section
          id="contact-form"
          className="bg-white px-6 md:px-12 py-20 md:py-24"
        >
          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

              {/* FORM INTRO */}
              <div className="lg:col-span-4">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  Start a conversation
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 leading-tight">
                  Tell us what you&apos;re working on.
                </h2>

                <p className="mt-5 text-sm md:text-base leading-7 text-slate-600">
                  Give us a little information about your organization and
                  what you need. We&apos;ll use it to understand the challenge
                  and start the right conversation.
                </p>

                <div className="mt-9 border-l-2 border-[#16A34A] pl-5">

                  <p className="text-sm leading-7 text-slate-600">
                    You can reach out about a single service or discuss a
                    broader technology need across your organization.
                  </p>

                </div>

              </div>


              {/* FORM */}
              <div className="lg:col-span-8">

                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-slate-200 p-6 md:p-9"
                >

                  <div className="grid md:grid-cols-2 gap-6">

                    {/* NAME */}
                    <div>

                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#16A34A] transition-colors"
                      />

                    </div>


                    {/* ORGANIZATION */}
                    <div>

                      <label
                        htmlFor="organization"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        Organization
                      </label>

                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Company or organization"
                        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#16A34A] transition-colors"
                      />

                    </div>


                    {/* EMAIL */}
                    <div>

                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#16A34A] transition-colors"
                      />

                    </div>


                    {/* PHONE */}
                    <div>

                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        Phone number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+250 ..."
                        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#16A34A] transition-colors"
                      />

                    </div>


                    {/* SERVICE */}
                    <div className="md:col-span-2">

                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        What can we help with?
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none focus:border-[#16A34A] transition-colors"
                      >

                        <option value="">Select a service</option>

                        {serviceOptions.map((service) => (
                          <option key={service.number} value={service.title}>
                            {service.title}
                          </option>
                        ))}

                        <option value="Multiple services / Other">
                          Multiple services / Other
                        </option>

                      </select>

                    </div>


                    {/* MESSAGE */}
                    <div className="md:col-span-2">

                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2"
                      >
                        Tell us about it
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your organization, challenge, or project..."
                        required
                        rows={6}
                        className="w-full resize-none border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#16A34A] transition-colors"
                      />

                    </div>

                  </div>


                  <div className="mt-7 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                    <p className="text-xs leading-5 text-slate-400 max-w-md">
                      Your message will open your email application with the
                      details filled in for you.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0"
                    >
                      Send inquiry
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>
        </section>


        {/* SERVICES */}
        <section
          id="services"
          className="bg-[#F3F7F4] px-6 md:px-12 py-20 md:py-24"
        >

          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-12 gap-8 items-end">

              <div className="md:col-span-7">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  What we can help with
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                  Practical technology.
                  <br />
                  Built around your needs.
                </h2>

              </div>

              <p className="md:col-span-5 text-sm md:text-base leading-7 text-slate-600">
                From software and cloud infrastructure to digital visibility
                and workplace technology, our services can work independently
                or together as your organization evolves.
              </p>

            </div>


            <div className="mt-12 border-t border-slate-200">

              <div className="grid md:grid-cols-2 lg:grid-cols-3">

                {serviceOptions.map((service) => {
                  const Icon = service.icon;

                  return (
                    <a
                      key={service.number}
                      href="#contact-form"
                      onClick={() =>
                        setForm((current) => ({
                          ...current,
                          service: service.title,
                        }))
                      }
                      className="group p-7 md:p-8 border-b border-slate-200 md:border-r last:border-r-0 hover:bg-[#F3F7F4] transition-colors"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-xs font-bold text-[#16A34A]">
                          {service.number}
                        </span>

                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.7}
                          className="text-slate-300 group-hover:text-[#16A34A] transition-colors"
                        />

                      </div>


                      <div className="mt-7 w-10 h-10 border border-[#16A34A]/30 flex items-center justify-center">

                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="text-[#16A34A]"
                        />

                      </div>


                      <h3 className="mt-6 text-lg font-semibold text-slate-800 group-hover:text-[#16A34A] transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>

                    </a>
                  );
                })}

              </div>

            </div>

          </div>

        </section>


        {/* WHY START WITH US */}
        <section className="bg-white px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

              <div className="lg:col-span-5">

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-8 h-px bg-[#16A34A]" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                    Why work with us
                  </p>

                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 leading-tight">
                  Technology should fit the organization — not the other way
                  around.
                </h2>

              </div>


              <div className="lg:col-span-7">

                <div className="grid sm:grid-cols-2 gap-x-10">

                  <div className="py-6 border-t border-slate-200">

                    <div className="flex items-start gap-3">

                      <Check
                        size={17}
                        strokeWidth={2}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <h3 className="text-sm font-semibold text-slate-800">
                          Customized solutions
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Technology built around your context, budget, and
                          goals.
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="py-6 border-t border-slate-200">

                    <div className="flex items-start gap-3">

                      <Check
                        size={17}
                        strokeWidth={2}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <h3 className="text-sm font-semibold text-slate-800">
                          Long-term partnership
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Ongoing support, monitoring, and reviews after
                          delivery.
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="py-6 border-t border-slate-200">

                    <div className="flex items-start gap-3">

                      <Check
                        size={17}
                        strokeWidth={2}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <h3 className="text-sm font-semibold text-slate-800">
                          Local expertise
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Solutions grounded in Rwanda&apos;s operating
                          environment and realities.
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="py-6 border-t border-slate-200">

                    <div className="flex items-start gap-3">

                      <Check
                        size={17}
                        strokeWidth={2}
                        className="text-[#16A34A] mt-0.5 shrink-0"
                      />

                      <div>

                        <h3 className="text-sm font-semibold text-slate-800">
                          Global standards
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Internationally recognized tools, frameworks, and
                          best practices.
                        </p>

                      </div>

                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>

        </section>


        {/* COMMITMENT */}
        <section className="bg-[#F3F7F4] px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-5xl mx-auto">

            <div className="border-l-2 border-[#16A34A] pl-6 md:pl-10">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                Our commitment
              </p>

              <blockquote className="mt-5 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-800">
                &quot;We don&apos;t just implement technology — we build
                partnerships. Every client&apos;s success is a direct measure
                of our own.&quot;
              </blockquote>

              <p className="mt-6 text-sm font-semibold text-slate-500">
                — Novelty Works Ltd
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}