import TodoList from "./components/TodoList";
import "./App.css";
import AuthorBox from "./components/AuthorBox";

const App = () => {
  return (
    <>
      <AuthorBox />

      <main className="main  min-h-screen flex flex-col items-center">
        <h1 className="text-5xl flex items-center gap-2 font-semibold text-[#B7AFA3] md:mt-16 mt-20">
          <img src="/icons/spiral_notebook.png" alt="spiral_notebook" />
          <span>Todo List</span>
        </h1>
        <TodoList />
      </main>
    </>
  );
};
export default App;
