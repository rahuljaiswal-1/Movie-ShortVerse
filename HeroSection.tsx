'use client';

import Link from 'next/link';
import { Play, Info } from 'lucide-react';
import { Movie } from '@/types/movie';

interface HeroSectionProps {
     movie: Movie;
}

export default function HeroSection({ movie }: HeroSectionProps) {
     return (
          <div className="relative h-[70vh] md:h-[85vh] w-full">
               {/* Background Image */}
               <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                         backgroundImage: `url(${movie.backdrop || movie.poster})`,
                    }}
               >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               </div>

               {/* Content */}
               <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="max-w-2xl space-y-4 md:space-y-6">
                         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                              {movie.title}
                         </h1>

                         <div className="flex items-center space-x-4 text-sm md:text-base">
                              <span className="text-green-500 font-semibold">{movie.rating}/10</span>
                              <span>{movie.year}</span>
                              <span>{movie.duration}</span>
                         </div>

                         <p className="text-sm md:text-lg text-gray-300 line-clamp-3 md:line-clamp-4">
                              {movie.description}
                         </p>

                         <div className="flex flex-wrap gap-2">
                              {movie.genre.map((g) => (
                                   <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm">
                                        {g}
                                   </span>
                              ))}
                         </div>

                         {/* Action Buttons */}
                         <div className="flex flex-wrap gap-3 pt-2">
                              <Link href={`/watch/${movie.id}`}>
                                   <button className="flex items-center space-x-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-white/90 transition font-semibold">
                                        <Play size={20} fill="currentColor" />
                                        <span>Play</span>
                                   </button>
                              </Link>
                              <Link href={`/movie/${movie.id}`}>
                                   <button className="flex items-center space-x-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-500/90 transition font-semibold">
                                        <Info size={20} />
                                        <span>More Info</span>
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}
