import { useState } from "react";
import { v4 as uuid } from "uuid";

export function TodoInput({ handleClick }) {
  const [input, setInput] = useState("");
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleOnClick = () => {
    const payload = {
      title: input,
      status: false,
      id: uuid()
    };
    handleClick(payload);
    setInput("");
  };
  return (
    <div>
      <input
        value={input}
        type="text"
        placeholder="add a todo"
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>Add Todo</button>
    </div>
  );
}
