import Checkbox from "./components/Checkbox";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <main className="main  min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-gray-500 my-4 mt-16">
        📝 Todo List
      </h1>
      <TodoList />
    </main>
  );
};
export default App;
