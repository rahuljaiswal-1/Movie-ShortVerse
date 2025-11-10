'use client';

import { useRouter } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import { movies } from '@/lib/mockData';
import { notFound } from 'next/navigation';

export default function WatchPage({ params }: { params: { id: string } }) {
     const router = useRouter();
     const movie = movies.find(m => m.id === parseInt(params.id));

     if (!movie) {
          notFound();
     }

     const handleClose = () => {
          router.back();
     };

     return <VideoPlayer title={movie.title} videoUrl={movie.videoUrl} onClose={handleClose} />;
}
