import { useState } from "react";

const Checkbox = ({ checked, checkTodo }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheck = (e) => {
    e.preventDefault();
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    checkTodo(newCheckedState);
  };

  return <button onClick={handleCheck}>{isChecked ? "❌" : "✅"}</button>;
};

export default Checkbox;
