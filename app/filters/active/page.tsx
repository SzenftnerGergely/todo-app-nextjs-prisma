import { filterActiveTodo } from '@/app/actions/todoActions'
import AddTodo from '@/components/shared/AddTodo'
import FiltersComponent from '@/components/shared/FiltersComponent'
import Header from '@/components/shared/Header'
import TodosList from '@/components/shared/TodosList'
import React from 'react'

const page = async () => {
    const todos = await filterActiveTodo()

    return (
        <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%] flex flex-col">
            <Header />
            <AddTodo />
            <TodosList todos={todos} />
            <FiltersComponent todos={todos} />
        </div>
    )
}

export default page
