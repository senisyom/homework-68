import TaskForm from "../../component/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkOutDone, fetchTask, deleteTask } from "./task.slice";
import { RootState, AppDispatch } from "../../app/store";

const TaskList = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todo.tasks);

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

    
  return (
    <div>
      <TaskForm />
      {tasks ? (
        tasks.map((task) => (
          <div
            className="input-group mb-3 container-sm"
            style={{ maxWidth: "700px" }}
            key={task.id}
          >
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                checked={task.completed}
                onChange={(e) =>
                  dispatch(
                    checkOutDone({ id: task.id, completed: e.target.checked })
                  )
                }
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              value={task.title}
              readOnly
            />
            <button
              className="btn btn-danger ms-4"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
};

export default TaskList;
