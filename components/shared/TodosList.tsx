import Todo from "./Todo";

type TodoProps = {
    todos: {
        title: string | null
        id: string
        isCompleted: boolean
    }[]
}

const TodosList = ({ todos }: TodoProps) => {

    return (
        <div className="bg-white dark:bg-[#25273c] rounded-t-md flex flex-col
        items-center justify-center w-full shadow-xl mt-6">
            {todos.length > 0 ?

                (todos.map((todo, id) => (
                    <div className="w-full border-b dark:border-b-gray-600" key={id}>
                        <Todo todo={todo} />
                    </div>
                )))

                : (<div className="py-4 px-5 border-b w-full text-center">No todos</div>)}

        </div>
    )
}

export default TodosList
