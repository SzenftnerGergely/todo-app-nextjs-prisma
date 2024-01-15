"use client"

import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import { updateOrder } from "@/app/actions/todoActions";

type TodoProps = {
    todos: {
        title: string | null
        id: string
        isCompleted: boolean
    }[]
}

const TodosList = ({ todos }: TodoProps) => {
    const [orderedData, setOrderedData] = useState(todos);

    const onDragEnd = (result: DropResult) => {
      const { source, destination } = result;
  
      if (!destination) return;
      if (destination.droppableId === source.droppableId && destination.index === source.index) return;
  
      const updatedTodos = Array.from(orderedData);
      const [movedTodo] = updatedTodos.splice(source.index, 1);
      updatedTodos.splice(destination.index, 0, movedTodo);
  
      setOrderedData(updatedTodos);

      updateOrder(movedTodo.id, destination.index);
      console.log(destination.index);
      
    };
  
    useEffect(() => {
      setOrderedData(todos);
    }, [todos]);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="TodosList">
                {(provided) => (
                    <div className="bg-white dark:bg-[#25273c] rounded-t-md flex flex-col
                    items-center justify-center w-full shadow-xl mt-6"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {todos.length > 0 ?

                            (orderedData.map((todo, index) => (
                                <div className="w-full border-b dark:border-b-gray-600" key={todo.id}>
                                    <Todo todo={todo} index={index} />
                                </div>
                            )))

                            : (<div className="py-4 px-5 border-b w-full text-center">No todos</div>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TodosList
