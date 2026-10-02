import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    stars: '★★★★★',
    text: '“Thanks to their Google Workspace consolidation and data centralization, we saw a 43% productivity increase within 12 months. Highly professional productivity systems setup!”',
    source: 'Tasks Africa CBC',
    role: 'Technology Partner',
    mark: 'TA',
    link: 'https://www.tasksafrica.org/',
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '“They built a nationwide student fellowship platform and digital communication infrastructure for us, establishing a reliable, country-wide communication channel for our students.”',
    source: 'RNSA-Intagamburuzwa',
    role: 'Digital Infrastructure Partner',
    mark: 'RI',
    link: 'https://rnsa-intagamburuzwa.rw/',
  },
  {
    id: 3,
    stars: '★★★★',
    text: '“Their digital marketing strategy and SEO campaign gave us a huge visibility boost, leading to a 17% increase in sales per quarter. Excellent work!”',
    source: 'Biokube Rwanda',
    role: 'Digital Growth Partner',
    mark: 'BK',
    link: 'https://www.biokube.com/where-to-buy-biokube/',
  },
  {
    id: 4,
    stars: '★★★★★',
    text: '“Harmonizing our inventory system and setting up real-time business activity tracking streamlined our operations completely. Live monitoring has been a game changer.”',
    source: 'Umutaka Ltd',
    role: 'Technology & Systems Partner',
    mark: 'UM',
    link: '#',
  },
];

export default function MemberReviews() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      scrollContainerRef.current;

    const maxScroll = scrollWidth - clientWidth;
    const percentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;

    if (percentage < 0.33) {
      setActiveDot(0);
    } else if (percentage < 0.66) {
      setActiveDot(1);
    } else {
      setActiveDot(2);
    }
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollBy({
      left: direction * 390,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] bg-white px-6 md:px-12 py-14 md:py-16 text-slate-800 flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-9 md:mb-10 text-center">

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#16A34A]" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A]">
              Client Stories
            </p>

            <span className="w-8 h-px bg-[#16A34A]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            What our clients
            <span className="text-[#16A34A]"> say.</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Real experiences from organizations we've worked with across
            technology, systems, and digital growth.
          </p>

        </div>

        {/* Reviews */}
        <div className="relative">

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-3
              cursor-grab
              active:cursor-grabbing
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >

            {reviews.map((review) => (
              <article
                key={review.id}
                className="
                  group
                  relative
                  flex-none
                  w-[82vw]
                  sm:w-[340px]
                  md:w-[360px]
                  min-h-[285px]
                  bg-[#FBFDFC]
                  border
                  border-slate-200
                  rounded-xl
                  p-6 md:p-7
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-300
                  hover:border-green-200
                "
              >

                {/* Top */}
                <div>

                  <div className="flex items-center justify-between mb-5">

                    <span className="text-[#16A34A] text-sm tracking-[0.15em]">
                      {review.stars}
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Client Review
                    </span>

                  </div>

                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                    {review.text}
                  </p>

                </div>

                {/* Client */}
                <div className="pt-5 mt-6 border-t border-slate-200">

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3 min-w-0">

                      <div className="
                        w-10
                        h-10
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        flex
                        items-center
                        justify-center
                        shrink-0
                        group-hover:border-green-200
                        transition-colors
                        duration-300
                      ">
                        <span className="text-[10px] font-black tracking-tight text-slate-700">
                          {review.mark}
                        </span>
                      </div>

                      <div className="min-w-0">

                        <a
                          href={review.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-slate-800
                            hover:text-[#16A34A]
                            transition-colors
                            truncate
                          "
                        >
                          {review.source}
                          <ExternalLink size={12} strokeWidth={1.7} />
                        </a>

                        <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                          {review.role}
                        </p>

                      </div>

                    </div>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        text-slate-300
                        group-hover:text-[#16A34A]
                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

                {/* Green Accent */}
                <span className="
                  absolute
                  bottom-0
                  left-6
                  h-[2px]
                  w-8
                  bg-[#16A34A]
                  group-hover:w-14
                  transition-all
                  duration-500
                " />

              </article>
            ))}

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between max-w-sm mx-auto mt-6">

            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous reviews"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                flex
                items-center
                justify-center
                hover:text-[#16A34A]
                hover:border-green-200
                transition-all
                cursor-pointer
              "
            >
              <ArrowLeft size={17} strokeWidth={1.6} />
            </button>

            <div className="flex items-center gap-2">

              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className={`
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeDot === dot
                        ? 'w-5 h-1.5 bg-[#16A34A]'
                        : 'w-1.5 h-1.5 bg-slate-300'
                    }
                  `}
                />
              ))}

            </div>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next reviews"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                flex
                items-center
                justify-center
                hover:text-[#16A34A]
                hover:border-green-200
                transition-all
                cursor-pointer
              "
            >
              <ArrowRight size={17} strokeWidth={1.6} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}