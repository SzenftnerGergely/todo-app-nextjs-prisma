import AddTodo from "@/components/shared/AddTodo";
import Header from "@/components/shared/Header";
import TodosPage from "@/components/shared/TodosPage";

const Home = () => {

  return (
    <div className="w-[28%] flex flex-col">
      <Header />
      <AddTodo />
      <TodosPage />
    </div>
  )
}

export default Home