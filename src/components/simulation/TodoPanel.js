import React, { useState } from "react";
import "./TodoPanel.css";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const panelTexts = [
  {
    id: "doNotingPanel",
    name: "Do not touch anything",
  },
  {
    id: "followProtocolPanel",
    name: "Follow Company Protocol",
  },
  {
    id: "contactITPanel",
    name: "Contact IT",
  },
];

const TodoPanel = () => {
  const [rankContent, setRankContent] = useState([]);

  const handleRankClick = (index) => {
    const clickedText = panelTexts[index];
    // Check if the clicked text already exists in rankContent
    if (rankContent.some((text) => text.id === clickedText.id)) {
      return; // Return early if it's a duplicate
    }
    setRankContent([...rankContent, clickedText]);
  };

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "rank-group") {
      const reorderedStores = [...rankContent];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);

      return setRankContent(reorderedStores);
    }
  };

  return (
    <div className="todo-panel">
      <DragDropContext onDragEnd={handleDragDrop}>
        <div className="todo-ranking-panel">
          <div className="todo-rankingpanel-top">When to do?</div>
          <Droppable droppableId="todo-ranking-droppable" type="rank-group">
            {(provided) => (
              <div
                className="todo-placing"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {rankContent.map((rankText, index) => (
                  <Draggable
                    draggableId={rankText.id}
                    key={rankText.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="simText-container"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="action-index">{index + 1}</div>
                        <div className="action-place">{rankText.name}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="horizontalLineTodo"></div>
        <div className="todo-list-panel">
          <div className="todo-listingpanel-top">What to do?</div>
          <div className="todo-placing">
            {panelTexts.map((element, index) => (
              <div
                className={`panel-button ${element.id}`}
                onClick={() => handleRankClick(index)}
                key={element.id}
              >
                {element.name}
              </div>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TodoPanel;
