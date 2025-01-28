// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;



import React from 'react';

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <span>{text}</span>
      <span>{category}</span>
      <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
}

export default Task;