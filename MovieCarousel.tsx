'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Movie } from '@/types/movie';

interface MovieCarouselProps {
     title: string;
     movies: Movie[];
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
     const carouselRef = useRef<HTMLDivElement>(null);

     const scroll = (direction: 'left' | 'right') => {
          if (carouselRef.current) {
               const scrollAmount = direction === 'left' ? -800 : 800;
               carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
     };

     return (
          <div className="relative group mb-8 md:mb-12">
               <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 sm:px-6 lg:px-8">
                    {title}
               </h2>

               {/* Scroll Buttons */}
               <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90"
                    aria-label="Scroll left"
               >
                    <ChevronLeft size={24} />
               </button>

               <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90"
                    aria-label="Scroll right"
               >
                    <ChevronRight size={24} />
               </button>

               {/* Carousel */}
               <div
                    ref={carouselRef}
                    className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                    {movies.map((movie) => (
                         <div key={movie.id} className="flex-none w-32 sm:w-40 md:w-48 lg:w-56">
                              <MovieCard movie={movie} />
                         </div>
                    ))}
               </div>
          </div>
     );
}
