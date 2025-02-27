"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Button from "./Button/button";
import { SliderType } from "@/types";

const Carousel = ({ slider }: { slider: Array<SliderType> }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    let autoplayInterval: NodeJS.Timeout | null = null;

    const autoplay = () => {
      if (!isHovered) {
        emblaApi.scrollNext();
      }
    };

    const startAutoplay = () => {
      autoplayInterval = setInterval(autoplay, 3000);
    };

    startAutoplay(); // Start autoplay initially

    // Update active index when the slide changes
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Call once to set initial state

    return () => {
      emblaApi.off("select", onSelect);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [emblaApi, isHovered]);
  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Pause autoplay on hover
      onMouseLeave={() => setIsHovered(false)} // Resume autoplay on mouse leave
    >
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slider.map((slide: SliderType, index: number) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-12">
                <div className="space-y-6">
                  <h1 className="text-tertiary text-4xl md:text-5xl font-bold">
                    {slide.title} <br />
                    <span className="text-tertiary text-5xl font-bold">
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button text={slide.cta} />
                </div>
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={slide.image}
                    alt="Hero illustration"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots Navigation - Repositioned */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2">
        {slider.map((_, index: number) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-tertiary" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
