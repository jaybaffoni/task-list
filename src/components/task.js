import { useState } from "react";

const Task = (props) => {
   
      const [title, setTitle] = useState(props.title);

      const [completed, setCompleted] = useState(props.completed);

    const style = {
        taskStyle: {
            borderColor: "black",
            backgroundColor: 'white',
            padding: 12,
            marginBottom: 12,
            boxShadow: "0px 3px 10px -3px rgba(0,0,0,0.5)"
        },
        titleStyle: {
            padding: 0,
            margin: 0,
        }

    }

    const updateCompleted = () => {
        setCompleted(!completed);
    };

  return (
    <div>
        <div className="task" style={style.taskStyle}>
            <p style={style.titleStyle}>{title}</p>
            <button>Delete</button>
            <button>Edit</button>
            <button onClick={updateCompleted}>{completed ? "UnComplete" : "Complete"}</button>
        </div>
      
    </div>
  )
};

export default Task;
