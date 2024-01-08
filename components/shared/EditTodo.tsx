"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if(todo.isCompleted === true) {
      return
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex items-center">
      <Button
        onClick={handleEdit}
        text={<FaPen />}
        actionButton
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