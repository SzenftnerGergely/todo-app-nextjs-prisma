import AddTodo from "@/components/shared/AddTodo";
import Header from "@/components/shared/Header";
import TodosPage from "@/components/shared/TodosPage";

const Home = () => {

  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%] flex flex-col">
      <Header />
      <AddTodo />
      <TodosPage />
    </div>
  )
}

export default Home