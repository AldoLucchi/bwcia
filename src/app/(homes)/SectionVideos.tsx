"use client";

import React, { FC, useState } from "react";
import Heading from "@/shared/Heading/Heading";
import NcImage from "@/shared/NcImage/NcImage";
import NcPlayIcon from "@/shared/NcPlayIcon/NcPlayIcon";
import isSafariBrowser from "@/utils/isSafariBrowser";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "nOQyWbPO2Ds",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
  },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "container",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1${
              isSafariBrowser() ? "&mute=1" : ""
            }`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              fill
              containerClassName="absolute inset-0 rounded-3xl overflow-hidden z-0"
              className="object-cover transition-transform group-hover:scale-105 duration-300"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
              sizes="(max-width: 1024px) 100vw, 1280px"
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="BWC is a superior human race that comes from the Kapteyn Star, which is outside the solar system and it is esteemed to be 11,500 million years old.. The BWC inhabit planet Kapteyn b, which is characterized by having solidary and exponential growth. Said planet is 12.8 light years from the solar system and planet Earth. On Kapteyn b every inhabitant has a code that identifies him/her; plus, as a community they have a code that they go by: 3-0-9-1-8, in which each number has a numerological significance. The BWC enjoy making interstellar trips and, as a solidary community that characterizes them, they have their eyes on Earth, and they have decided to travel to the planet to aid in the economic, social, commercial, and personal growth of its inhabitants. "
      >
        ☼ BWC
      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12 dark:bg-neutral-800/80"></div>
        <div className="flex-grow relative">{renderMainVideo()}</div>
      </div>
    </div>
  );
};

export default SectionVideos;
