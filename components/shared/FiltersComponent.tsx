import React from 'react'
import { deleteCompletedTodo } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Link from "next/link";
import Filters from './Filters';

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
        <div className="bg-white dark:bg-[#25273c] rounded-b-md flex 
        flex-col items-center justify-center w-full shadow-xl">

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 sm:flex-row items-center justify-between py-1 text-sm px-8">
                <span className='sm:order-1 justify-self-start text-gray-400 dark:text-gray-500'>{completedTodos.length} items left</span>

                <Filters style="hidden sm:flex gap-3 sm:col-span-1 justify-self-center col-span-2 order-last sm:order-2" />

                <div className='justify-self-end sm:order-3 sm:justify-self-end'>
                    <Form action={deleteCompletedTodo}>
                        <Button
                            actionButton
                            text="Clear Completed"
                            type="submit"
                            style='hover:bg-white dark:hover:bg-[#25273c] 
                            text-gray-400 hover:text-gray-800  dark:hover:text-gray-300'
                        />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FiltersComponent
