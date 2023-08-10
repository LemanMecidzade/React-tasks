import { useState, useEffect, useRef, useCallback } from "react";
import Box from "./Box";
import { useTodoContext } from "../context/useTodoContext/useTodoContext";

const TodoForm = (props) => {
  const { todos, addTodo } = useTodoContext();
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  //On mount, focus input element
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const value = e.target.text.value;
      addTodo({
        id: Math.floor(Math.random() * 1000),
        text: value,
      });

      setInput("");
      inputRef.current.focus();
    },
    [addTodo]
  );

  return (
    <>
      <p>Count: {todos.length}</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              autoComplete="off"
              type="text"
              placeholder="Update the task"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              autoComplete="off"
              type="text"
              placeholder="Add a task"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add a task</button>
            <Box handleChange={handleChange} />
          </>
        )}
      </form>
    </>
  );
};

export default TodoForm;
