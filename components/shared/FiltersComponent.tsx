import React from 'react'
import { deleteCompletedTodo } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type TodoProps = {
    todos:
    {
        title: string | null
        id: string
        isCompleted: boolean
    }[]
}

const FiltersComponent = ({ todos }: TodoProps) => {
    const completedTodos = todos.filter((todo) => todo.isCompleted == false)

    return (
        <div className="bg-white dark:bg-gray-800 rounded-b-md flex flex-col items-center justify-center w-full shadow-xl">

            <div className="w-full flex items-center justify-between py-1 text-sm px-6">
                <span>{completedTodos.length} items left</span>

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

export default FiltersComponent
