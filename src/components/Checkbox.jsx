import { useState } from "react";

const Checkbox = ({ checked, checkTodo }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheck = (e) => {
    e.preventDefault();
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    checkTodo(newCheckedState);
  };

  return (
    <button onClick={handleCheck}>
      {isChecked ? (
        <img src="/icons/checkmark.png" alt="✅" />
      ) : (
        <img src="/icons/crossmark.png" alt="❌" />
      )}
    </button>
  );
};

export default Checkbox;
