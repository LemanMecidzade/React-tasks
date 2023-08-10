import { useContext, createContext, useState, useCallback } from "react";
import textValidation,{NO_EMPTY_REGEX} from "../../helpers/textValidation";

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (todo) => {
      if (textValidation(todo.text, NO_EMPTY_REGEX)) {
        return;
      }
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    },
    [todos]
  );
  const updateTodo = (todoId, newValue) => {
    if (textValidation(newValue.text, NO_EMPTY_REGEX)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, removeTodo, completeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw Error(
      "ToDo Context is not defined. Use component inside of Provider: TodoContextProvider"
    );
  }
  return useContext(TodoContext);
};
