import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todos/ActionCreator";
import { TodoInput } from "./TodoInput";

export function Todo() {
  const dispatch = useDispatch();
  const handleClick = (payload) => {
    dispatch(addTodo(payload));
  };
  const todo = useSelector((state) => state.TodoReducer.todo);
  return (
    <>
      <TodoInput handleClick={handleClick} />
      {todo.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </>
  );
}
