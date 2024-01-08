import Todo from "./Todo";
import { getAllTodos } from "@/app/actions/todoActions";
import TodoFilters from "./TodoFilters";

const TodosPage = async () => {
    const data = await getAllTodos()

    return (
        <div className="bg-white dark:bg-gray-800 rounded-t-md flex flex-col items-center justify-center w-full shadow-xl mt-10">
            {data.map((todo, id) => (
                <div className="w-full border-b last:border-none" key={id}>
                    <Todo todo={todo} />
                </div>
            ))}
            <TodoFilters />
        </div>
    )
}

export default TodosPage
