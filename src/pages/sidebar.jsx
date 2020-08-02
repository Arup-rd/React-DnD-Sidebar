import React, { useState } from "react";
import { Data } from "../common/initialData";
import TaskCard from "../component/taskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container } from "./sidebarPage_style";

const Sidebar = (props) => {
  const onDragEnd = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Container>
              {Data.modules.map((module, index) => (
                <TaskCard
                  key={module.id}
                  id={module.id}
                  title={module.title}
                  child={module.child}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Container>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Sidebar;
