import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {

  return (
    <div
      className={`flex items-center justify-between py-4 px-5 
      ${todo.isCompleted === true ? "line-through" : "none"}`}
    >
      <div className="flex items-center gap-3">
        <ChangeTodo todo={todo} />
        <div className="text-center font-semibold">
          {todo.title}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;