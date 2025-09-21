import { createContext, useState } from "react";

export const TaskContext = createContext({
  tasks: undefined,
  setTasks: () => {},
});

export const TasksContextProvider = (props) => {
  const [tasks, setTasks] = useState();

  return (
    <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};
