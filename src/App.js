import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
// import AddTodo from "./Todo/AddTodo";
import Loading from "./Loader";

const AddTodo = React.lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Todo/AddTodo"));
    }, 1000);
  })
);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 1000);
      });
  }, []);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodos(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodos }}>
      <div className="wrapper">
        <h1>React Hooks</h1>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loading />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No Todo Items</p>
        )}
      </div>
    </Context.Provider>
  );
}

// npm uninstall -g yarn
export default App;
