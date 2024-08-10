import Checkbox from "./Checkbox";

const TodoItem = ({ todo, onRemove, onCheck }) => {
  const handleRemove = () => {
    onRemove(todo.id); // Call onRemove function with todo id
  };

  const checkTodo = () => {
    onCheck(todo.id);
  };

  return (
    <div
      className={`flex rounded-2xl items-center justify-between ${
        todo.checked ? "text-content-checked" : "text-content"
      } ${
        todo.checked ? "bg-secondary" : "bg-primary"
      } md:min-w-[50vw] min-w-[80vw] px-8 py-2 mb-2`}
    >
      <div className="flex flexrow gap-1 md:gap-6">
        <Checkbox checkTodo={checkTodo} checked={todo.checked} />
        <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
      </div>
      <button
        onClick={handleRemove}
        className="text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
      >
        <img src="/icons/wastebucket.png" alt="🗑️" />
      </button>
    </div>
  );
};

export default TodoItem;
