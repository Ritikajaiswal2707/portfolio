"use client";

import { useState, useRef, useEffect } from "react";
import { FaLocationArrow, FaGithub, FaPlay, FaPause } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const toggleVideo = (projectId: number) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  const handleVideoHover = (projectId: number, isHovering: boolean) => {
    setHoveredVideo(isHovering ? projectId : null);
  };

  // Auto-play video when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
            if (videoRefs.current[videoId]) {
              videoRefs.current[videoId]?.play();
            }
          } else {
            const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
            if (videoRefs.current[videoId]) {
              videoRefs.current[videoId]?.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20">
      <h1 className="heading">
        Featured{" "}
        <span className="text-purple">AI & Real-Time Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                
                {/* Video Player */}
                {item.video && (
                  <div 
                    className="absolute inset-0 z-20"
                    onMouseEnter={() => handleVideoHover(item.id, true)}
                    onMouseLeave={() => handleVideoHover(item.id, false)}
                  >
                    <video
                      ref={(el) => { videoRefs.current[item.id] = el; }}
                      data-video-id={item.id}
                      className="w-full h-full object-cover lg:rounded-3xl"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={item.img}
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play/Pause Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 lg:rounded-3xl">
                      <button
                        onClick={() => {
                          const video = videoRefs.current[item.id];
                          if (video) {
                            if (video.paused) {
                              video.play();
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
                      >
                        {playingVideo === item.id ? (
                          <FaPause className="text-white text-2xl" />
                        ) : (
                          <FaPlay className="text-white text-2xl ml-1" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Fallback to image if no video */}
                {!item.video && (
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                )}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-purple hover:text-purple-300 transition-colors"
                  >
                    <span>Live Site</span>
                    <FaLocationArrow size={14} />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
