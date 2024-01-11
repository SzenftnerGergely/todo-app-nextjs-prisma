import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { GiCircle } from "react-icons/gi";

const AddTodo = () => {
  return (
    <Form action={create} className="w-full m-auto">
      <div className="flex relative">
        <GiCircle className="text-gray-400 text-2xl absolute top-[29%] left-[1.7rem]" />
        <Input
          name="input"
          type="text"
          placeholder="Create a new todo"
          style="pl-16"
        />
      </div>
    </Form>
  );
};

export default AddTodo;