import { useEffect } from "react";
import {
  useTodoContext,
} from "../context/useTodoContext/useTodoContext";

const Box = ({ handleChange }) => {
  const ctx = useTodoContext();
  console.log(ctx)
  useEffect(() => {
    console.log("RENDER HAPPENED");
  }, [handleChange]);
  return <div onClick={handleChange}>Todos Count: {ctx.todos.length}</div>;
};

export default Box;
