import { useDispatch, useSelector } from "react-redux";
import { addTaskInput, addTask } from "../container/TaskList/task.slice";
import { RootState, AppDispatch } from "../app/store";

const TaskForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const taskForm = useSelector((state: RootState) => state.todo.taskForm);

  return (
    <div className="container-sm mt-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-5">TODO: </h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => dispatch(addTaskInput(e.target.value))}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon1"
          onClick={() => {
            if (taskForm.trim()) {
              dispatch(addTask(taskForm));
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
