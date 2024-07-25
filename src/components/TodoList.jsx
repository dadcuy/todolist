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
      <div className="mt-8 border bg-gray-500 bg-opacity-25 shadow-2xl md:max-w-[60vw] backdrop-blur px-4 py-4 rounded-xl">
        {todos.length === 0 ? (
          <div className="md:min-w-[50vw] min-w-screen text-center">Empty</div>
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
        className="fixed bottom-8 flex flex-row mt-4 md:max-w-[50vw] gap-0"
      >
        <input
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          value={todoInput}
          className="w-[50vw] border-2 border-r-0 border-[#ffdde1] rounded-l-lg px-4 py-2"
          placeholder="Add a task"
          type="text"
          required
        />
        <button
          type="submit"
          className=" rounded-r-lg border-none bg-[#ffdde1] ease-in px-4 py-2"
        >
          ➕
        </button>
      </form>
    </div>
  );
};

export default TodoList;
