import React, { useState } from 'react'
import "./TodoPanel.css";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const panelTexts = [
    {
        id: "doNotingPanel",
        name: "Do not touch anything"
    },
    {
        id: "followProtocolPanel",
        name: "Follow Company Protocol"
    },
    {
        id: "contactITPanel",
        name: "Contact IT"
    }
];

const TodoPanel = () => {

    const [panelContent, setPanelContent] = useState(panelTexts);

    const handleDragDrop = (results) => {
        const {source, destination, type} = results;

        if(!destination) return;

        if(source.droppableId === destination.droppableId && source.index === destination.index) return;

        if(type === "group"){
            const reorderedStores = [...panelContent];

            const sourceIndex = source.index;
            const destinationIndex = destination.index;

            const [removedStore] = reorderedStores.splice(sourceIndex, 1);
            reorderedStores.splice(destinationIndex, 0, removedStore)

            return setPanelContent(reorderedStores);
        }
    };

  return (
    <div className='todo-panel'>
        <DragDropContext onDragEnd={handleDragDrop}>
            <div className='todo-ranking-panel'>
                <div className='todo-rankingpanel-top'>
                    When to do?
                </div>

                <div className='todo-placing'>
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className='todo-list-panel'>
                <div className='todo-listingpanel-top'>
                    What to do?
                </div>
                <Droppable droppableId='todo-listing-droppable' type='group'>
                    {(provided) => (
                        <div className='todo-listing' {...provided.droppableProps} ref={provided.innerRef}> 
                            {panelContent.map((rankText, index) => (
                                <Draggable draggableId={rankText.id} key={rankText.id} index={index}>
                                    {(provided) => (
                                        <div className='simText-container' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                            {rankText.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    </div>
  )
}

export default TodoPanel

