import React from "react";

function  Loading (){
  return (

    <div>
      <div style={{display:'flex',justifyContent: 'center',}} className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  
  )
};

export default Loading;
