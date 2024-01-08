import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-full m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Create a new todo"
        />
      </div>
    </Form>
  );
};

export default AddTodo;