import { useState } from 'react';

const faqData = [
  {
    question: "What is Novelty Works Ltd?",
    answer:
      "Novelty Works Ltd is a technology firm based in Kigali, Rwanda. We help organizations turn ideas and real-world challenges into practical digital solutions, from software and cloud services to IT support, digital marketing, and technology integration."
  },
  {
    question: "What does Novelty Works do?",
    answer:
      "We provide software development, cloud services management, IT consultancy, digital marketing and visibility, corporate work tools, technology integration, and ongoing technical support. We start by understanding the problem, brainstorming the possibilities, and then building a solution around what the client actually needs."
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with businesses, institutions, cooperatives, NGOs, and other organizations looking to make better use of technology. Whether it is a small idea that needs to be brought to life or a larger system that needs to be improved, we work from the client's situation, goals, and resources."
  },
  {
    question: "What makes Novelty Works different?",
    answer:
      "Our work starts with people, not templates. We listen, brainstorm, plan, build, test, and improve with the client involved throughout the process. Every solution is shaped around the organization it is built for rather than simply taking a ready-made idea and putting a new name on it. The result is technology that feels purposeful, practical, and genuinely theirs."
  },
  {
    question: "Tell me about your team.",
    answer:
      "We are a lean, agile team of technology professionals with experience across software engineering, cloud infrastructure, digital marketing, and IT consulting. We combine deep local knowledge with internationally recognized tools and standards, and we also work with a trusted network of specialist associates and partners when a project needs additional expertise or capacity."
  },
  {
    question: "Do you provide ongoing technical support?",
    answer:
      "Yes. Our work does not stop when a project goes live. We provide ongoing technical support and management to help keep our clients' systems reliable and running properly. Clients can also reach our technical support through our 24/7 hotline when they need assistance."
  },
  {
    question: "How much do your services cost?",
    answer:
      "Every project is different, so we do not force every client into the same package or price. We first look at what you need, the scope of the work, and what you have available. From there, we work out a solution that delivers the right quality and value while staying within the client's budget."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] bg-[#F3F7F4] px-6 md:px-12 py-16 md:py-20 text-slate-800 flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        {/* Desktop Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-12 lg:gap-20 items-center">

          {/* Left Side */}
          <div className="max-w-md">

            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#16A34A] mb-4">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-800">
              Questions,
              <br />
              <span className="text-[#16A34A]">answered.</span>
            </h2>

            <p className="mt-5 text-sm md:text-base text-slate-500 leading-relaxed max-w-sm">
              A few things you may want to know before working with us.
              If you still have questions, we're always happy to talk.
            </p>

            {/* Small visual detail */}
            <div className="mt-8 flex items-center gap-3">
              <span className="w-10 h-px bg-[#16A34A]" />

              <span className="text-xs font-medium text-slate-400">
                Novelty Works Ltd
              </span>
            </div>

          </div>

          {/* Right Side — FAQ */}
          <div className="border-t border-slate-200">

            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-slate-200"
                >

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-6
                      py-5
                      md:py-5.5
                      text-left
                      cursor-pointer
                    "
                  >

                    <span
                      className={`
                        relative
                        text-sm
                        md:text-base
                        font-semibold
                        pr-4
                        transition-colors
                        duration-200
                        ${
                          isOpen
                            ? 'text-[#16A34A]'
                            : 'text-slate-800 group-hover:text-[#16A34A]'
                        }
                      `}
                    >
                      {faq.question}

                      <span
                        className={`
                          absolute
                          left-0
                          -bottom-1
                          h-px
                          w-full
                          bg-[#16A34A]
                          origin-left
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </span>

                    <span
                      className={`
                        shrink-0
                        w-8
                        h-8
                        rounded-lg
                        border
                        flex
                        items-center
                        justify-center
                        text-lg
                        font-light
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? 'border-green-200 bg-green-50 text-[#16A34A]'
                            : 'border-slate-200 bg-white/60 text-slate-500 group-hover:border-green-200 group-hover:text-[#16A34A]'
                        }
                      `}
                    >
                      {isOpen ? '−' : '+'}
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <p className="pb-5 pr-10 text-sm text-slate-600 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

