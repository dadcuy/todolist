import Checkbox from "./Checkbox";

const TodoItem = ({ todo, onRemove, onCheck }) => {
  const handleRemove = () => {
    onRemove(todo.id); // Call onRemove function with todo id
  };

  const checkTodo = () => {
    onCheck(todo.id);
  };

  return (
    <div className="flex items-center justify-between bg-white md:min-w-[50vw] min-w-[90vw] border border-gray-300 px-4 py-2 rounded-md mb-2">
      <div className="flex flexrow gap-1 md:gap-6">
        <Checkbox checkTodo={checkTodo} checked={todo.checked} />
        <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
      </div>
      <button
        onClick={handleRemove}
        className="bg-gray-300 bg-opacity-65 backdrop-blur px-3 py-2 rounded-full"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
