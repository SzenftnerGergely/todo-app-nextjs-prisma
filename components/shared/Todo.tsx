"use client"

import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";
import React, { useState } from 'react';

const Todo = ({ todo }: { todo: todoType }) => {
  const [isShown, setIsShown] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  return (
    <div
      className={`flex items-center justify-between py-4 px-5 
      ${todo.isCompleted === true ? "line-through" : "none"}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="flex items-center gap-3">
        <ChangeTodo todo={todo} />
        <div 
          className="text-center font-semibold cursor-pointer" 
          onClick={() =>setEditTodo(true)}>
          {todo.title}
        </div>
      </div>
      {isShown && <div className="flex items-center gap-2">
        {!todo.isCompleted && editTodo && <EditTodo todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} />}
        <DeleteTodo todo={todo} />
      </div>}
    </div>
  );
};

export default Todo;