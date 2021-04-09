import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
    border: "1px solid #ccc",
    marginBottom: "4px",
    borderRadius: "4px",
    backgroundColor: "rgb(246, 253, 253)",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodos } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        &nbsp;&nbsp;
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={removeTodos.bind(null,todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
