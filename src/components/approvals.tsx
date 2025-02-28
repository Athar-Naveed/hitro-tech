"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import Image from "next/image";
import Heading from "./heading";

const Approvals = ({ data }: { data: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
      },
    },
    [AutoPlay({ delay: 5000 })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);
  return (
    <>
      <div className="approval my-20">
        <div className="heading">
          <Heading
            text={"Company Approval"}
            title={"Approval"}
            desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {data.map((testimonial: any, index: number) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%]"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-8 h-8">
                        <Image
                          src={testimonial.src}
                          alt={testimonial.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-semibold text-gray-800 text-xl">
                        {testimonial.title}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(data.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === selectedIndex
                      ? "bg-orange-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index * 2)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Approvals;
