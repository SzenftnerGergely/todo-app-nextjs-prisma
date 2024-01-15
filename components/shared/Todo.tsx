"use client"

import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";
import React, { useState } from 'react';
import { Draggable } from "@hello-pangea/dnd";

const Todo = ({ todo, index }: { todo: todoType, index: number }) => {
  const [isShown, setIsShown] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  return (
    <Draggable draggableId={todo.id.toString()} index={index} >
      
      {(provided, snapshot) => (
      <div
        className={`flex items-center justify-between py-4 px-5 
      ${todo.isCompleted === true ? "line-through text-gray-400 dark:text-gray-600" : "none"}
      ${snapshot.isDragging ? "dark:bg-gray-500 bg-gray-200 rounded-md" : ""}`}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => { setIsShown(false), setEditTodo(false)
        }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div className="flex items-center gap-3">
          <ChangeTodo todo={todo} />
          <div
            className="text-center font-semibold cursor-pointer"
            onClick={() => setEditTodo(true)}>
            {todo.title}
          </div>
        </div>
        {isShown && <div className="flex items-center gap-2">
          {!todo.isCompleted && editTodo && <EditTodo todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} />}
          <DeleteTodo todo={todo} editTodo={editTodo} />
        </div>}
      </div>
    )}
    </Draggable>
  );
};

export default Todo;