import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export function DragAndDropList() {
  const example_data = [
    {
      id: "gary",
      name: "Gary Goodspeed",
      thumb: "/images/gary.png",
    },
    {
      id: "cato",
      name: "Little Cato",
      thumb: "/images/cato.png",
    },
    {
      id: "kvn",
      name: "KVN",
      thumb: "/images/kvn.png",
    },
    {
      id: "mooncake",
      name: "Mooncake",
      thumb: "/images/mooncake.png",
    },
    {
      id: "quinn",
      name: "Quinn Ergon",
      thumb: "/images/quinn.png",
    },
    {
      id: "bacon",
      name: "Bacon Bacon",
      thumb: "/jaisadji/"
    }
  ];

  const [musics, updateMusics] = useState(example_data);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(musics);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateMusics(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="musics" direction="horizontal">
        {(provided) => (
          <ul
            className="flex space-x-6 mt-10"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {musics.map(({id}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex items-center justify-center w-[12rem] h-64 bg-[#1b1b1b] rounded-md hover:brightness-125 transition-all ease-linear">
                        Conteúdo da música
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
  );
}
