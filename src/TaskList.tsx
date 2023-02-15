import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { Box, Card } from "@mui/material";
import Task from "./Task";
import { StrictModeDroppable } from "./StrictModeDroppable";

export default function TaskList() {
  const [state, setState] = useState([
    {
      id: 1,
      name: "yes sir",
    },
    {
      id: 2,
      name: "hi mom",
    },
  ]);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const copy = [...state];
    const [removed] = copy.splice(source.index, 1);
    copy.splice(destination.index, 0, removed);
    setState(copy);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="drop">
        {(provided, snapshot) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {state.map((item, idx) => (
              <Task id={item.id} name={item.name} index={idx} key={idx} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}
