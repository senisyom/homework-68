import "./App.css";
import { Dispatch } from "@reduxjs/toolkit";
import { fetchTask } from "./task.slice";

const App = () => {
  const dispatch = useDispatch();

  dispatchEvent(fetchTask());
  return (
    <>
      <div></div>
    </>
  );
};

export default App;
