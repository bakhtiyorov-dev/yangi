import React, { useEffect, useRef, useState } from "react";
import { RowProps } from "@/components/row/row.props";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Thumbnail } from "@/components";

const Row = ({ title, movies, isBig = false }: RowProps) => {
    const [isWisibleCarouselArrows , setIsWisibleCarouselArrows] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleClick = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      let scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      if (scrollTo === scrollWidth) {
        scrollTo = 0;
      }
      if (scrollTo < 0) {
        scrollTo = scrollWidth;
      }
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
    useEffect(() => {
        if(carouselRef.current){
            setIsWisibleCarouselArrows(carouselRef.current.scrollWidth > carouselRef.current.clientWidth);
        }
    })


  return (
    <div className={`space-y-1 md:space-y-4`}>
      <h1
        className={
          "w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition-all duration-300"
        }
      >
        {title}
      </h1>
      {/*    carousel*/}
      <div className={"group relative md:ml-2 "}>
        {isWisibleCarouselArrows && (
          <div
            className={
              "absolute top-0 bottom-0 left-0 opacity-0 group-hover:opacity-100  md:w-[150px] z-40 m-auto flex items-center justify-start px-2 bg-gradient-to-r from-slate-900 from-70% to-transparent via-30% bg-opacity-80"
            }
          >
            <AiFillCaretLeft
              onClick={() => handleClick("left")}
              className={` h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transform active:scale-125 group-hover:shadow-2xl hover:scale-150`}
            />
          </div>
        )}

        <div
          className={`flex items-center  ${
            isBig ? "space-x-1" : "space-x-4"
          } overflow-x-scroll scrollbar-hide overflow-y-hidden`}
          ref={carouselRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} isBig={isBig} />
          ))}
        </div>
        {isWisibleCarouselArrows && (
          <div
            className={
              "absolute top-0 bottom-0 right-0 opacity-0 group-hover:opacity-100  md:w-[150px] z-40 m-auto flex items-center justify-end px-2 bg-gradient-to-l from-slate-900 from-70% to-transparent via-30% bg-opacity-80"
            }
          >
            <AiFillCaretRight
              onClick={() => handleClick("right")}
              className={
                " h-6 w-6 cursor-pointer transform active:scale-125 group-hover:shadow-2xl hover:scale-150"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;
