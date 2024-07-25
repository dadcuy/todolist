import Checkbox from "./components/Checkbox";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <main className="bg-gradient-to-br from-[#ee9ca7] via-[#ffdde1] to-[rgb(238,156,167)] min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-gray-500 my-4 mt-16">
        📝 Todo List
      </h1>
      <TodoList />
    </main>
  );
};
export default App;
