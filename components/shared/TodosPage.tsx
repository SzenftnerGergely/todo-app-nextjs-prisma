import Todo from "./Todo";
import { deleteCompletedTodo } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Link from "next/link";

type TodoProps = {
    todos:
    {
        title: string | null
        id: string
        isCompleted: boolean
    }[]
}

const TodosPage = async ({ todos }: TodoProps) => {
    const filteredData = todos.filter((todo) => todo.isCompleted == false)

    return (
        <div className="bg-white dark:bg-gray-800 rounded-md flex flex-col items-center justify-center w-full shadow-xl mt-10">
            {todos.map((todo, id) => (
                <div className="w-full border-b last:border-none" key={id}>
                    <Todo todo={todo} />
                </div>
            ))}

            <div className="w-full flex items-center justify-between rounded-b-md py-1 text-sm px-6">
                <span>{filteredData.length}items left</span>

                <div className="flex gap-3">
                    <Link href="/" className="hover:text-gray-400">All</Link>
                    <Link href="/filters/active" className="hover:text-gray-400">Active</Link>
                    <Link href="/filters/completed" className="hover:text-gray-400">Completed</Link>
                </div>

                <Form action={deleteCompletedTodo}>
                    <Button
                        actionButton
                        text="Clear Completed"
                        type="submit"
                        style='hover:bg-white hover:text-gray-400'
                    />
                </Form>
            </div>
        </div>
    )
}

export default TodosPage
