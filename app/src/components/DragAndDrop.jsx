import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export function DragAndDropList() {
  const data = [
    {
      id: "1",
      name: "Calm Down",
      thumb: "https://i.scdn.co/image/ab67616d0000b273a3a7f38ea2033aa501afd4cf",
      artists: "Rema, Selena Gomez",
    },
    {
      id: "2",
      name: "As It Was",
      thumb: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
      artists: "Harry Styles",
    },
    {
      id: "3",
      name: "In The End",
      thumb: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
      artists: "Linkin Park"
    },
    {
      id: "4",
      name: "Nothing Else Matters",
      thumb: "https://i.scdn.co/image/ab67616d0000b27395958b5d219f1b328f083e08",
      artists: "Metallica"
    },
    {
      id: "5",
      name: "Coração Radiante",
      thumb: "https://i.scdn.co/image/ab67616d0000b2733a3569af7c0f73c3b7d74133",
      artists: "Grupo Revelação"
    },
    {
      id: "6",
      name: "Temporal",
      thumb: "https://i.scdn.co/image/ab67616d0000b273fa79bbb1585d2580e484da5b",
      artists: "Art Popular"
    }
  ];

  const [musics, updateMusics] = useState(data);

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
            {musics.map(({id, thumb, artists ,name}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex flex-col items-center w-[12rem] h-64 bg-[#1b1b1b] p-3
                      rounded-lg hover:brightness-125 transition-all ease-linear justify-between relative">
                        <p className="absolute -left-2 -top-2 w-5 h-5 bg-[#1DB954] flex justify-center items-center rounded-full text-xs">{index+1}</p>
                        <img src={thumb} alt="Description" className="w-full max-w-[160px] rounded-md shadow"/>
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
  );
}
