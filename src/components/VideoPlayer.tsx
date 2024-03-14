"use client";
import { VideoContext } from "@/context/VideoContext";
import React, { useContext, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VideoPlayer = (): JSX.Element => {
  const {
    currentVideo,
  }: {
    currentVideo: IVideoList;
  } = useContext(VideoContext);
  document.title = `${currentVideo.title} | Video Player` || "Video Player";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoDuration = localStorage.getItem("videoDuration");
    const videoDurationArray = videoDuration ? JSON.parse(videoDuration) : [];
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        const duration = videoRef.current?.duration;
        const currentTimestamp = videoRef.current?.currentTime;
        const video = {
          id: currentVideo.id,
          duration,
          currentTimestamp,
        };
        const videoIndex = videoDurationArray.findIndex(
          (video: { id: number }) => video.id === currentVideo.id
        );
        if (videoIndex === -1) {
          videoDurationArray.push(video);
        } else {
          videoDurationArray[videoIndex] = video;
        }
        localStorage.setItem(
          "videoDuration",
          JSON.stringify(videoDurationArray)
        );
      };
    }
    const interval = setInterval(() => {
      if (videoRef.current) {
        const duration = videoRef.current?.duration;
        const currentTimestamp = videoRef.current?.currentTime;
        const video = {
          id: currentVideo.id,
          duration,
          currentTimestamp,
        };
        const videoIndex = videoDurationArray.findIndex(
          (video: { id: number }) => video.id === currentVideo.id
        );
        if (videoIndex === -1) {
          videoDurationArray.push(video);
        } else {
          videoDurationArray[videoIndex] = video;
        }
        localStorage.setItem(
          "videoDuration",
          JSON.stringify(videoDurationArray)
        );
      }
    }, 5000);

    if (videoDurationArray.length > 0) {
      const videoIndex = videoDurationArray.findIndex(
        (video: { id: number }) => video.id === currentVideo.id
      );
      if (videoIndex !== -1 && videoRef.current) {
        videoRef.current.currentTime =
          videoDurationArray[videoIndex].currentTimestamp;
      }
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
    return () => clearInterval(interval);
  }, [currentVideo]);

  return (
    <>
      {currentVideo.sources ? (
        <>
          <video
            ref={videoRef}
            key={currentVideo.sources[0]}
            controls
            width="100%"
            className="rounded-md lg:h-[calc(50vh+110px)] border border-secondary-muted shadow"
          >
            <source src={currentVideo.sources[0]} type="video/mp4" />
          </video>
          <div className="mt-5 space-y-3">
            <h1 className="text-2xl font-bold">{currentVideo.title}</h1>
            <p className="text-secondary-muted">{currentVideo.subtitle}</p>
            <p className="text-gray-500">{currentVideo.description}</p>
          </div>
        </>
      ) : (
        <>
          <Skeleton className="w-full h-[calc(50vh+110px)]"></Skeleton>
          <div className="mt-5 space-y-3">
            <Skeleton className="w-1/2 h-6"></Skeleton>
            <Skeleton className="w-1/4 h-4"></Skeleton>
            <Skeleton className="w-3/4 h-4"></Skeleton>
          </div>
        </>
      )}
    </>
  );
};

export default VideoPlayer;
