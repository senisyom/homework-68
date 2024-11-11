import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTask } from "./task.slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <>
      <div></div>
    </>
  );
};

export default App;
