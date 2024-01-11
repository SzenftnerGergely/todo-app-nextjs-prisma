import AddTodo from "@/components/shared/AddTodo";
import Header from "@/components/shared/Header";
import TodosPage from "@/components/shared/TodosPage";
import { getAllTodos } from "./actions/todoActions";

const Home = async () => {
  const todos = await getAllTodos()

  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%] flex flex-col">
      <Header />
      <AddTodo />
      <TodosPage todos={todos} />
    </div>
  )
}

export default Home