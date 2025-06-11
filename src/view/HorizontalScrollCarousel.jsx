import React, { useRef, useState } from 'react';

const HorizontalScrollCarousel = ({ items, renderItem, viewAllCard = null }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const cardWidth = scrollContainer.children[0].offsetWidth + 16;
    scrollContainer.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.children[0].offsetWidth + 16;
    const index = Math.round(scrollContainer.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 no-scrollbar pb-2 scroll-smooth scrollbar-hide"
      >
        {items.map((item, index) => renderItem(item, index))}
        {viewAllCard}
      </div>

      <div className="flex justify-center mt-3 gap-1">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-red-500 scale-110' : 'bg-red-200'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default HorizontalScrollCarousel;
