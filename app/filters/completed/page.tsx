import { filterActiveTodo, filterCompletedTodo } from '@/app/actions/todoActions'
import AddTodo from '@/components/shared/AddTodo'
import Filters from '@/components/shared/Filters'
import FiltersComponent from '@/components/shared/FiltersComponent'
import Header from '@/components/shared/Header'
import TodosList from '@/components/shared/TodosList'
import React from 'react'

const page = async () => {
    const todos = await filterCompletedTodo()

    return (
        <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%] flex flex-col absolute z-30">
            <Header />
            <AddTodo />
            <TodosList todos={todos} />
            <FiltersComponent todos={todos} />
            <Filters style='sm:hidden flex bg-white dark:bg-[#25273c] w-full mt-4 rounded-md py-3 px-4 shadow-xl justify-center gap-4' />
        </div>
    )
}

export default page