import { todoStatus } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { MdOutlineCheck } from "react-icons/md";
import { GiCircle } from "react-icons/gi";
import { todoType } from "@/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  const {isCompleted} = todo

  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button
        actionButton
        type="submit"
        text={isCompleted ? 
          <MdOutlineCheck  className="rounded-full p-1 text-white
          bg-gradient-to-br from-[#69c2fc] to-[#a574ee]" /> 
          : <GiCircle className="text-gray-400" />
        }
        stye="text-2xl fill-white p-0 hover:bg-white flex items-center"
      />
    </Form>
  );
};

export default ChangeTodo;