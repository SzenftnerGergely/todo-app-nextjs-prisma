"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { FaPen } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";
import { GrClose } from "react-icons/gr";

type TodoProps = {
  todo:todoType
  editTodo: boolean
  setEditTodo: Dispatch<SetStateAction<boolean>>
}

const EditTodo = ({ todo, editTodo, setEditTodo }:TodoProps) => {

  const handleEdit = () => {
    if(todo.isCompleted === true) {
      return
    }
    setEditTodo(!editTodo);
  }

  const handleSubmit = () => {
    setEditTodo(false);
  }

  return (
    <div className="flex items-center">
      <Button
        onClick={handleEdit}
        text={<GrClose />}
        actionButton
        style="mr-1 dark:hover:text-gray-800"
      />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={todo.id}
            type="hidden"
          />
          <div className="flex justify-center items-center">
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
              style="border mr-2 px-0.75 py-0.75"
            />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;