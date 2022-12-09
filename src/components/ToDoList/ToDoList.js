import "./ToDoList.css";
import {useSelector} from "react-redux";
import {todoSelector} from "../../todoReducer";

function ToDoList() {

  // please give me data provided by todoSelector from todoReducer.
  const value = useSelector(todoSelector);

  return (
    <ul className="list">
      {
        value.map(i=>
          <li>{i}</li>
          )
      }
    </ul>
  );
}

export default ToDoList;
