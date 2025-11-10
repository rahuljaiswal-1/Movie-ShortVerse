'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward, X } from 'lucide-react';

interface VideoPlayerProps {
     title: string;
     videoUrl?: string;
     onClose: () => void;
}

export default function VideoPlayer({ title, videoUrl, onClose }: VideoPlayerProps) {
     const videoRef = useRef<HTMLVideoElement>(null);
     const [isPlaying, setIsPlaying] = useState(false);
     const [isMuted, setIsMuted] = useState(false);
     const [volume, setVolume] = useState(1);
     const [progress, setProgress] = useState(0);
     const [currentTime, setCurrentTime] = useState(0);
     const [duration, setDuration] = useState(0);
     const [showControls, setShowControls] = useState(true);
     const [isFullscreen, setIsFullscreen] = useState(false);
     const controlsTimeoutRef = useRef<NodeJS.Timeout>();

     // Sample video URL (Big Buck Bunny - open source movie)
     const defaultVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
     const actualVideoUrl = videoUrl || defaultVideoUrl;

     useEffect(() => {
          const video = videoRef.current;
          if (!video) return;

          const updateProgress = () => {
               const progress = (video.currentTime / video.duration) * 100;
               setProgress(progress);
               setCurrentTime(video.currentTime);
          };

          const updateDuration = () => {
               setDuration(video.duration);
          };

          video.addEventListener('timeupdate', updateProgress);
          video.addEventListener('loadedmetadata', updateDuration);

          return () => {
               video.removeEventListener('timeupdate', updateProgress);
               video.removeEventListener('loadedmetadata', updateDuration);
          };
     }, []);

     const togglePlay = () => {
          const video = videoRef.current;
          if (!video) return;

          if (isPlaying) {
               video.pause();
          } else {
               video.play();
          }
          setIsPlaying(!isPlaying);
     };

     const toggleMute = () => {
          const video = videoRef.current;
          if (!video) return;

          video.muted = !isMuted;
          setIsMuted(!isMuted);
     };

     const handleVolumeChange = (value: number) => {
          const video = videoRef.current;
          if (!video) return;

          const newVolume = value / 100;
          video.volume = newVolume;
          setVolume(newVolume);
          setIsMuted(newVolume === 0);
     };

     const handleProgressChange = (value: number) => {
          const video = videoRef.current;
          if (!video) return;

          const time = (value / 100) * video.duration;
          video.currentTime = time;
          setProgress(value);
     };

     const skipTime = (seconds: number) => {
          const video = videoRef.current;
          if (!video) return;

          video.currentTime += seconds;
     };

     const toggleFullscreen = () => {
          if (!document.fullscreenElement) {
               document.documentElement.requestFullscreen();
               setIsFullscreen(true);
          } else {
               document.exitFullscreen();
               setIsFullscreen(false);
          }
     };

     const formatTime = (seconds: number) => {
          if (isNaN(seconds)) return '0:00';
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          return `${mins}:${secs.toString().padStart(2, '0')}`;
     };

     const handleMouseMove = () => {
          setShowControls(true);
          if (controlsTimeoutRef.current) {
               clearTimeout(controlsTimeoutRef.current);
          }
          controlsTimeoutRef.current = setTimeout(() => {
               if (isPlaying) {
                    setShowControls(false);
               }
          }, 3000);
     };

     return (
          <div
               className="fixed inset-0 z-50 bg-black flex items-center justify-center"
               onMouseMove={handleMouseMove}
               onMouseLeave={() => isPlaying && setShowControls(false)}
          >
               <div className="w-full h-full relative">
                    {/* Video Element */}
                    <video
                         ref={videoRef}
                         className="w-full h-full object-contain"
                         src={actualVideoUrl}
                         onClick={togglePlay}
                    />

                    {/* Movie Title Overlay (Always visible at start) */}
                    <div className={`absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                         <div className="flex items-center justify-between">
                              <div>
                                   <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
                                   <p className="text-sm text-gray-300">Now Playing</p>
                              </div>
                              <button
                                   onClick={onClose}
                                   className="text-white hover:text-gray-300 transition bg-black/50 rounded-full p-2"
                                   aria-label="Close player"
                              >
                                   <X size={28} />
                              </button>
                         </div>
                    </div>

                    {/* Center Play Button (when paused) */}
                    {!isPlaying && (
                         <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                   onClick={togglePlay}
                                   className="bg-primary hover:bg-primary-dark rounded-full p-6 transition-transform hover:scale-110"
                                   aria-label="Play"
                              >
                                   <Play size={60} fill="white" className="text-white" />
                              </button>
                         </div>
                    )}

                    {/* Bottom Controls */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                         <div className="p-4 md:p-6 space-y-3">
                              {/* Progress Bar */}
                              <div className="relative group">
                                   <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={(e) => handleProgressChange(Number(e.target.value))}
                                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary hover:h-2 transition-all"
                                        style={{
                                             background: `linear-gradient(to right, #E50914 0%, #E50914 ${progress}%, #4B5563 ${progress}%, #4B5563 100%)`
                                        }}
                                   />
                              </div>

                              {/* Control Buttons */}
                              <div className="flex items-center justify-between">
                                   <div className="flex items-center space-x-3 md:space-x-4">
                                        {/* Play/Pause */}
                                        <button
                                             onClick={togglePlay}
                                             className="text-white hover:text-gray-300 transition"
                                             aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                             {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                                        </button>

                                        {/* Skip Back */}
                                        <button
                                             onClick={() => skipTime(-10)}
                                             className="text-white hover:text-gray-300 transition"
                                             aria-label="Skip back 10 seconds"
                                        >
                                             <SkipBack size={22} />
                                        </button>

                                        {/* Skip Forward */}
                                        <button
                                             onClick={() => skipTime(10)}
                                             className="text-white hover:text-gray-300 transition"
                                             aria-label="Skip forward 10 seconds"
                                        >
                                             <SkipForward size={22} />
                                        </button>

                                        {/* Volume */}
                                        <div className="flex items-center space-x-2 group">
                                             <button
                                                  onClick={toggleMute}
                                                  className="text-white hover:text-gray-300 transition"
                                                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                                             >
                                                  {isMuted || volume === 0 ? <VolumeX size={22} /> : <Volume2 size={22} />}
                                             </button>
                                             <input
                                                  type="range"
                                                  min="0"
                                                  max="100"
                                                  value={isMuted ? 0 : volume * 100}
                                                  onChange={(e) => handleVolumeChange(Number(e.target.value))}
                                                  className="w-0 md:w-20 opacity-0 md:opacity-100 group-hover:w-20 group-hover:opacity-100 transition-all h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary"
                                             />
                                        </div>

                                        {/* Time Display */}
                                        <span className="text-xs md:text-sm text-white font-medium">
                                             {formatTime(currentTime)} / {formatTime(duration)}
                                        </span>
                                   </div>

                                   {/* Fullscreen */}
                                   <button
                                        onClick={toggleFullscreen}
                                        className="text-white hover:text-gray-300 transition"
                                        aria-label="Toggle fullscreen"
                                   >
                                        {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
