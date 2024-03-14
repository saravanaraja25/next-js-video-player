"use client";
import { createContext, useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { VideoContext } from "./VideoContext";

export const DnDContext = createContext({});

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const { videoList, setVideoList } = useContext(VideoContext);

  function reorder(list: IVideoList[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newVideoList = reorder(
      videoList.data,
      result.source.index,
      result.destination.index
    );

    setVideoList({ ...videoList, data: newVideoList });
  }

  return (
    <DnDContext.Provider value={{}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {children}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DnDContext.Provider>
  );
};
