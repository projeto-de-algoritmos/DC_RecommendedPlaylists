import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { countingInversions } from "../utils/countingInversions";
import { musicsToSelect } from "../utils/musicsToSelect";
import { RecommendedPlaylists } from "./RecommendedPlaylists";

export function DragAndDropList() {
  const [musics, updateMusics] = useState(musicsToSelect);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(musics);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateMusics(items);
  }

  const handleRecommendedPlaylists = () => {
    const result = countingInversions(musics)
    RecommendedPlaylists(result)
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="musics" direction="horizontal">
          {(provided) => (
            <ul
              className="flex space-x-6 mt-10"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {musics.map(({ id, thumb, artists, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div
                          className="flex flex-col items-center w-[12rem] h-64 bg-[#1b1b1b] p-3
                      rounded-lg hover:brightness-125 transition-all ease-linear justify-between relative"
                        >
                          <p className="absolute -left-2 -top-2 w-5 h-5 bg-[#1DB954] flex justify-center items-center rounded-full text-xs">
                            {index + 1}
                          </p>
                          <img
                            src={thumb}
                            alt="Description"
                            className="w-full max-w-[160px] rounded-md shadow"
                          />
                          <p className="text-center font-bold">{name}</p>
                          <p className="opacity-70">{artists}</p>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button className="mt-10 w-fit h-fit py-3 px-5 bg-[#1DB954] rounded-md hover:bg-opacity-75 transition-all ease-in"
      onClick={handleRecommendedPlaylists}
      >
        Encontrar as melhores playlists
      </button>
    </>
  );
}
