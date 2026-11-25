import React, { useState, useEffect } from "react";

export default function TestimonialsSlider({ testimonials }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(testimonials.length / visibleCount));
  const safeIndex = slideIndex >= totalSlides ? 0 : slideIndex;
  const start = safeIndex * visibleCount;
  const currentSlice = testimonials.slice(start, start + visibleCount);

  const slide = (dir) => {
    setSlideIndex((prev) => {
      const next = prev + dir;
      if (next >= totalSlides) return 0;
      if (next < 0) return totalSlides - 1;
      return next;
    });
  };

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Cerita Pelanggan
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-sage mt-2">
              Dipercaya untuk Berbagai Momen
            </h2>
            <p className="text-sm text-charcoal/70 mt-2">
              Pengalaman nyata dari pelanggan yang telah merayakan acara spesial
              bersama Dapur Ibu Sri Rahayu.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => slide(-1)}
              className="w-11 h-11 rounded-full border border-charcoal/15 bg-white hover:bg-sage hover:text-ivory text-sage flex items-center justify-center transition-all shadow-2xs"
              aria-label="Ulasan Sebelumnya"
            >
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              className="w-11 h-11 rounded-full border border-charcoal/15 bg-white hover:bg-sage hover:text-ivory text-sage flex items-center justify-center transition-all shadow-2xs"
              aria-label="Ulasan Berikutnya"
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300">
          {currentSlice.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-3xl border border-charcoal/10 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex text-sm gap-1">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <i
                      key={idx}
                      className={`fa-solid fa-star ${
                        idx < rev.stars ? "text-gold" : "text-charcoal/20"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="text-sm text-charcoal/80 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
              <div className="pt-3 border-t border-charcoal/10">
                <p className="font-bold text-sage text-sm">{rev.name}</p>
                <p className="text-xs text-charcoal/60">{rev.occasion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }, (_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSlideIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === safeIndex ? "w-7 bg-sage" : "w-2 bg-charcoal/25"
              }`}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}