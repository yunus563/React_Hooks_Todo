import React, { useState } from "react";
import PropTypes from "prop-types";



function useInputValue(DefaultValue=''){
    
  const [value, setValue] = useState(DefaultValue);

  return{
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: ()=> setValue(''),
    value: ()=> value
  }
}

function AddTodo({ onCreate }) {

  const input = useInputValue('')

  function handleSubmit(event){

    event.preventDefault();
    
    if(input.value().trim()){
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        
        className="input"
        type="text"
        placeholder="Check you item name"
        {...input.bind}
      />
      <button className="add_btn" type="submit">
        Add Todo
      </button>
    </form>
  );
}


AddTodo.prototype = {
  onCreate: PropTypes.func.isRequired
}
export default AddTodo;
