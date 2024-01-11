import Todo from "./Todo";

type TodoProps = {
    todos:
    {
        title: string | null
        id: string
        isCompleted: boolean
    }[]
}

const TodosList = async ({ todos }: TodoProps) => {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-t-md flex flex-col
        items-center justify-center w-full shadow-xl mt-10">
            {todos.length > 0 ?

                (todos.map((todo, id) => (
                    <div className="w-full border-b" key={id}>
                        <Todo todo={todo} />
                    </div>
                )))

                : (<div className="py-4 px-5 border-b w-full text-center">No todos</div>)}

        </div>
    )
}

export default TodosList
