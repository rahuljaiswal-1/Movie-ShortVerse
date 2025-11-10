'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Play, Plus, ChevronDown } from 'lucide-react';
import { Movie } from '@/types/movie';

interface MovieCardProps {
     movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
     const [isHovered, setIsHovered] = useState(false);
     const router = useRouter();

     const handlePlayClick = (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(`/watch/${movie.id}`);
     };

     const handleMoreInfoClick = (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(`/movie/${movie.id}`);
     };

     const handleAddToListClick = (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          alert(`Added "${movie.title}" to My List!`);
     };

     return (
          <div
               className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               onClick={handleMoreInfoClick}
          >
               {/* Movie Poster */}
               <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-gray-800">
                    <img
                         src={movie.poster}
                         alt={movie.title}
                         className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    {isHovered && (
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 animate-fadeIn">
                              <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">
                                   {movie.title}
                              </h3>

                              <div className="flex items-center space-x-2 mb-2">
                                   <button
                                        className="bg-white text-black rounded-full p-2 hover:bg-white/80 transition"
                                        aria-label="Play"
                                        onClick={handlePlayClick}
                                   >
                                        <Play size={16} fill="currentColor" />
                                   </button>
                                   <button
                                        className="bg-gray-700/80 text-white rounded-full p-2 hover:bg-gray-600 transition"
                                        aria-label="Add to My List"
                                        onClick={handleAddToListClick}
                                   >
                                        <Plus size={16} />
                                   </button>
                                   <button
                                        className="bg-gray-700/80 text-white rounded-full p-2 hover:bg-gray-600 transition ml-auto"
                                        aria-label="More info"
                                        onClick={handleMoreInfoClick}
                                   >
                                        <ChevronDown size={16} />
                                   </button>
                              </div>

                              <div className="flex items-center space-x-2 text-xs">
                                   <span className="text-green-500 font-semibold">{movie.rating}</span>
                                   <span className="text-gray-400">{movie.year}</span>
                              </div>

                              <div className="flex flex-wrap gap-1 mt-2">
                                   {movie.genre.slice(0, 2).map((g) => (
                                        <span key={g} className="text-xs text-gray-300">
                                             {g}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
}
