import {  useTodoContext } from "../context/useTodoContext/useTodoContext";

const Circle = () => {
  const ctx = useTodoContext();

  return <div>{ctx.id}</div>;
};

export default Circle;
