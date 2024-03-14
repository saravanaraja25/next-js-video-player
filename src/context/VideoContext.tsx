"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const VideoContext: React.Context<any> = createContext({});

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function fetchVideoList() {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        setVideoList(data);
        setCurrentVideo(data.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideoList();
  }, []);

  useEffect(() => {
    console.log("currentVideo", currentVideo);
  }, [currentVideo]);

  return (
    <VideoContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        videoList,
        setVideoList,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
