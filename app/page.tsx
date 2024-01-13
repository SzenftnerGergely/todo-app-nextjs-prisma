import AddTodo from "@/components/shared/AddTodo";
import Header from "@/components/shared/Header";
import TodosPage from "@/components/shared/TodosList";
import { getAllTodos } from "./actions/todoActions";
import FiltersComponent from "@/components/shared/FiltersComponent";
import Filters from "@/components/shared/Filters";

const Home = async () => {
  const todos = await getAllTodos()

  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%] flex flex-col absolute z-30">
      <Header />
      <AddTodo />
      <TodosPage todos={todos} />
      <FiltersComponent todos={todos} />
      <Filters style='sm:hidden flex bg-white dark:bg-[#25273c] w-full mt-4 rounded-md py-3 px-4 shadow-xl justify-center gap-4' />
    </div>
  )
}

export default Home