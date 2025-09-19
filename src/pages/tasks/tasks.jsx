import { TaskCounter } from "@/components/tasksCounter/tasksCounter.jsx";
import { FilterBar } from "../../components/filterBar/filterBar.jsx";
import { Task } from "../../components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook.js";
import { useState } from "react";

export default function Tasks() {
  const [order, setOrder] = useState("asc");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const { data, isError, isSuccess, isPending, error } = useFetchTasks({
    order,
    limit,
    page,
  });

  console.log(data);

  return (
    <section className="flex flex-ro w-full p-4 gap-8 ">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-10/12 p-4 items-center">
          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Wednesday, 1 jan 2025
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TaskCounter count={4} type="todo" />
              <TaskCounter count={10} type="inProgress" />
              <TaskCounter count={12} type="completed" />
            </div>
            <FilterBar />
            <Task />
          </div>
        </div>
      </section>
      <section className="flex basis-1/3 ">
        <TaskSidebar />
      </section>
    </section>
  );
}
