import React, { useContext, useReducer, useEffect, useState } from "react";
import "./App.css";

const TodoContext = React.createContext();

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { todos: [...state.todos, action.payload] };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch({
      type: "add",
      payload: { id: Date.now(), text: text, completed: false },
    });
    setText("");
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  const value = { state, addTodo, removeTodo, toggleTodo, text, setText };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function TodoList() {
  const { state, removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "Undo" : "Done"}
          </button>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function TodoForm() {
  const { addTodo, text, setText } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className="todo-list">
        <h1>To-Do List</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
