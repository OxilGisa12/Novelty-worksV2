import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  Lightbulb,
  Megaphone,
  Search,
} from 'lucide-react';
import Footer from '../components/Footer';

const categories = [
  'All',
  'Technology',
  'Business',
  'Digital Marketing',
  'Guides',
  'Case Studies',
];

const insights = [
  {
    category: 'Technology',
    icon: Cloud,
    title: 'When Should Your Business Move to the Cloud?',
    excerpt:
      'A practical look at when cloud technology makes sense, what to consider first, and how to avoid unnecessary costs.',
    readTime: '6 min read',
  },
  {
    category: 'Business',
    icon: BriefcaseBusiness,
    title: '5 Ways Technology Can Simplify Everyday Work',
    excerpt:
      'From repetitive tasks to scattered information, discover practical areas where technology can make organizations more efficient.',
    readTime: '5 min read',
  },
  {
    category: 'Digital Marketing',
    icon: Megaphone,
    title: 'Building Online Visibility From the Ground Up',
    excerpt:
      'A simple starting point for organizations that want to become easier to find, trust, and engage with online.',
    readTime: '7 min read',
  },
  {
    category: 'Guides',
    icon: BookOpen,
    title: 'Google Workspace: A Simple Guide for Organizations',
    excerpt:
      'How Gmail, Drive, Docs, Sheets, Meet, and other tools can work together to create a more connected workplace.',
    readTime: '8 min read',
  },
  {
    category: 'Technology',
    icon: Lightbulb,
    title: 'What Digital Transformation Actually Means',
    excerpt:
      'Digital transformation is more than buying new software. Here is how organizations can approach it around real business needs.',
    readTime: '6 min read',
  },
  {
    category: 'Digital Marketing',
    icon: Search,
    title: 'Why Your Business Needs a Google Business Profile',
    excerpt:
      'Learn how a well-managed business profile can help customers discover your organization and find the information they need.',
    readTime: '5 min read',
  },
  {
    category: 'Guides',
    icon: BookOpen,
    title: '5 Things to Check Before Launching a Business Website',
    excerpt:
      'A practical checklist covering content, mobile experience, performance, security, and what happens after launch.',
    readTime: '6 min read',
  },
  {
    category: 'Case Studies',
    icon: BriefcaseBusiness,
    title: 'Biokube Rwanda: Building Digital Visibility',
    excerpt:
      'How a focused digital marketing and SEO approach helped strengthen online visibility and contributed to measurable business growth.',
    readTime: '4 min read',
  },
];

function InsightCard({ insight }) {
  const Icon = insight.icon;

  return (
    <article className="group border-t border-slate-200 pt-6 flex flex-col h-full">

      <div className="flex items-center justify-between mb-6">

        <div className="w-10 h-10 rounded-lg bg-[#F3F7F4] flex items-center justify-center">
          <Icon
            size={18}
            strokeWidth={1.7}
            className="text-[#16A34A]"
          />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          {insight.category}
        </span>

      </div>

      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 leading-snug group-hover:text-[#16A34A] transition-colors duration-200">
        {insight.title}
      </h2>

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        {insight.excerpt}
      </p>

      <div className="mt-auto pt-7 flex items-center justify-between">

        <span className="text-xs text-slate-400">
          {insight.readTime}
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-[#16A34A] transition-colors duration-200"
        >
          Read insight

          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>

      </div>

    </article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInsights =
    activeCategory === 'All'
      ? insights
      : insights.filter(
          (insight) => insight.category === activeCategory
        );

  return (
    <>
      <main>

        {/* HERO */}
        <section className="bg-[#F3F7F4] px-6 md:px-12 min-h-[calc(100vh-4rem)] flex items-center">

          <div className="max-w-7xl mx-auto w-full py-20">

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div className="lg:col-span-7 mb-7 lg:-translate-y-6">

              <div className="max-w-2xl">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A] mb-5">
                  Insights
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.06] text-slate-800">
                  Ideas, guides &
                  <br />
                  <span className="text-[#16A34A]">
                    perspectives on technology.
                  </span>
                </h1>

                <p className="mt-7 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Practical knowledge for businesses and organizations
                  navigating technology, digital transformation, and
                  online growth.
                </p>

                {/* GREEN ACCENT LINE */}
                <div className="mt-8 w-12 h-px bg-[#16A34A]" />

                <div className="mt-9 flex flex-wrap gap-3">

                  <span className="px-4 py-2 rounded-full bg-white text-xs font-medium text-slate-700">
                    Technology
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white text-xs font-medium text-slate-700">
                    Business
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white text-xs font-medium text-slate-700">
                    Digital Growth
                  </span>

                </div>

              </div>

            </div>


              {/* RIGHT */}
              <div className="lg:col-span-5">

                <div className="pl-0 lg:pl-10">

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 mb-5">
                    From the Novelty Works team
                  </p>

                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    Technology should make organizations
                    <span className="font-semibold text-slate-900">
                      {' '}more capable, not more complicated.
                    </span>
                  </p>

                  <div className="mt-8 w-12 h-px bg-[#16A34A]" />

                  <p className="mt-6 text-sm text-slate-500 leading-relaxed">
                    We share practical ideas, lessons, and useful
                    resources based on the problems organizations
                    actually face.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* INSIGHTS */}
        <section className="bg-white px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-7xl mx-auto">

            {/* SECTION HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A] mb-3">
                  Explore
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Knowledge that moves
                  <br className="hidden md:block" />
                  organizations forward.
                </h2>

              </div>

              <p className="max-w-md text-sm text-slate-600 leading-relaxed">
                Short, practical reads covering the technology and
                digital challenges that matter to modern organizations.
              </p>

            </div>


            {/* CATEGORY FILTER */}
            <div className="mt-12 flex flex-wrap gap-2">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-4 py-2.5 rounded-full text-sm font-medium
                    border transition-all duration-200
                    ${
                      activeCategory === category
                        ? 'bg-[#16A34A] border-[#16A34A] text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-green-200 hover:text-[#16A34A]'
                    }
                  `}
                >
                  {category}
                </button>
              ))}

            </div>


            {/* CARDS */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">

              {filteredInsights.map((insight) => (
                <InsightCard
                  key={insight.title}
                  insight={insight}
                />
              ))}

            </div>

          </div>

        </section>


        {/* CASE STUDY FEATURE */}
        <section className="bg-[#F3F7F4] px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

              <div className="lg:col-span-7">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A] mb-4">
                  Featured case study
                </p>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                  Turning digital visibility
                  <br />
                  into measurable growth.
                </h2>

                <p className="mt-6 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Explore how Novelty Works approached digital
                  marketing and SEO for Biokube Rwanda, focusing on
                  stronger online visibility and practical business
                  outcomes.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#16A34A] transition-colors duration-200"
                >
                  Read the case study
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </button>

              </div>


              <div className="lg:col-span-5">

                <div className="bg-white p-8 md:p-10">

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Project outcome
                  </p>

                  <div className="mt-7">

                    <p className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                      17%
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      reported increase in sales per quarter
                    </p>

                  </div>

                  <div className="mt-8 h-px bg-slate-200" />

                  <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                    Biokube Rwanda · Digital marketing & SEO
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="bg-slate-900 px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-400 mb-4">
                Have a challenge?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Let's turn the problem
                <br />
                into something practical.
              </h2>

            </div>

            <a
              href="/reach-us"
              className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0"
            >
              Start a conversation
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}