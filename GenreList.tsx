import Link from 'next/link';

const genres = [
     { name: 'Action', color: 'from-red-600 to-red-800' },
     { name: 'Sci-Fi', color: 'from-blue-600 to-blue-800' },
     { name: 'Romance', color: 'from-pink-600 to-pink-800' },
     { name: 'Drama', color: 'from-purple-600 to-purple-800' },
     { name: 'Comedy', color: 'from-yellow-600 to-yellow-800' },
     { name: 'Horror', color: 'from-gray-700 to-gray-900' },
     { name: 'Fantasy', color: 'from-indigo-600 to-indigo-800' },
     { name: 'Thriller', color: 'from-orange-600 to-orange-800' },
     { name: 'Adventure', color: 'from-green-600 to-green-800' },
     { name: 'Mystery', color: 'from-teal-600 to-teal-800' },
];

export default function GenreList() {
     return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
               {genres.map((genre) => (
                    <Link
                         key={genre.name}
                         href={`/genres/${genre.name.toLowerCase()}`}
                         className={`bg-gradient-to-br ${genre.color} rounded-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center`}
                    >
                         <span className="text-lg md:text-xl font-bold">{genre.name}</span>
                    </Link>
               ))}
          </div>
     );
}
