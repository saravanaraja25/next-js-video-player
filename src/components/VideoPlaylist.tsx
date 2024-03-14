"use client";
import { VideoContext } from "@/context/VideoContext";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePlay } from "lucide-react";
import { DnDProvider } from "@/context/DnDContext";
import { Draggable } from "react-beautiful-dnd";
import { Skeleton } from "./ui/skeleton";

const VideoPlaylist = (): JSX.Element => {
  return (
    <div className="border border-secondary-muted rounded border-r-5">
      <Card className="w-full border-0">
        <CardHeader className="border-b border-secondary-muted rounded-lg mb-5 w-full">
          <CardTitle>Playlist</CardTitle>
          <CardDescription>
            The Best Playlist that you would ever like
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-[50vh] overflow-y-auto">
          <DnDProvider>
            <PlaylistItems />
          </DnDProvider>
        </CardContent>
      </Card>
    </div>
  );
};

const PlaylistItems = (): JSX.Element => {
  const { videoList, setCurrentVideo, currentVideo } = useContext(VideoContext);

  return (
    <>
      {videoList.data ? (
        videoList.data.map((video: IVideoList, index: number) => (
          <Draggable
            key={video.id}
            draggableId={video.sources[0]}
            index={index}
          >
            {(provided) => (
              <div
                key={index}
                className={`border border-secondary rounded my-2 flex gap-3 min-h-[100px] p-2 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition-all ${video === currentVideo && "bg-gray-500 bg-opacity-10"}`
              }
                onClick={() => setCurrentVideo(video)}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="w-1/3 relative">
                  <video className="h-full w-full rounded-2xl">
                    <source src={`${video.sources[0]}#t=7`} type="video/mp4" />
                  </video>
                  <p className="absolute w-full h-full flex justify-center items-center top-0 z-[10] text-primary text-[25px] cursor-pointer rounded-2xl bg-slate-500 bg-opacity-30">
                    <SquarePlay />
                  </p>
                </div>
                <div className="w-2/3 p-2">
                  <h3 className="text-md font-semibold truncate overflow-hidden pr-3">
                    {video.title}
                  </h3>
                  <p className="text-xs mt-2 text-secondary-muted truncate overflow-hidden">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            )}
          </Draggable>
        ))
      ) : (
        <>
          <div className="border border-secondary rounded my-2 flex gap-3 min-h-[100px] p-2 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition-all">
            <div className="w-1/3">
              <Skeleton className="h-[100px] w-full rounded-2xl" />
            </div>
            <div className="w-2/3 p-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 mt-3 w-1/2" />
            </div>
          </div>
          <div className="border border-secondary rounded my-2 flex gap-3 min-h-[100px] p-2 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition-all">
            <div className="w-1/3">
              <Skeleton className="h-[100px] w-full rounded-2xl" />
            </div>
            <div className="w-2/3 p-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 mt-3 w-1/2" />
            </div>
          </div>
          <div className="border border-secondary rounded my-2 flex gap-3 min-h-[100px] p-2 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition-all">
            <div className="w-1/3">
              <Skeleton className="h-[100px] w-full rounded-2xl" />
            </div>
            <div className="w-2/3 p-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 mt-3 w-1/2" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoPlaylist;
