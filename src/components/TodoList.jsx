import { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidV4 } from "uuid";
const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Hello World",
      id: uuidV4(),
      checked: false,
    },
    {
      text: "Random Task",
      id: uuidV4(),
      checked: false,
    },
    {
      text: "Some Task",
      id: uuidV4(),
      checked: true,
    },
    {
      text: "Meow ee meow",
      id: uuidV4(),
      checked: false,
    },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: uuidV4(), checked: false }]);
    setTodoInput(""); // Clear input after adding todo
  };

  const removeTodo = (idToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };

  const checkTodo = (idToCheck) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idToCheck ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`mt-8 md:max-w-[60vw] px-4 py-4 rounded-xl ${
          todos.length > 6 ? "max-h-[25.1rem] overflow-y-auto" : ""
        } pb-4`}
      >
        {todos.length === 0 ? (
          <div className="text-center text-2xl font-semibold text-primary">
            Empty
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={removeTodo}
              onCheck={checkTodo}
            />
          ))
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todoInput);
        }}
        className="fixed bottom-8 flex flex-row mt-4 md:max-w-[30vw] gap-0"
      >
        <input
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          value={todoInput}
          className="w-[50vw] border-r-0 border-2 border-primary border-opacity-70 focus:border-opacity-100 flex focus:outline-none antialiased rounded-l-full px-4 py-2"
          placeholder="Add a task"
          type="text"
          required
        />
        <button
          type="submit"
          className="inline-flex justify-center items-center rounded-r-full border-none bg-primary hover:brightness-90 ease-in md:px-7 md:py-3 px-4 py-2"
        >
          <img
            src="/icons/plus.png"
            className="scale-90 md:scale-150"
            alt="➕"
          />
        </button>
      </form>
    </div>
  );
};

export default TodoList;
