import { TaskCounter } from "@/components/tasksCounter/tasksCounter.jsx";
import { FilterBar } from "../../components/filterBar/filterBar.jsx";
import { Task } from "../../components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook.js";
import { useState, useContext, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskContext } from "@/context/tasks.context.jsx";
import { useSearchParams } from "react-router-dom";

function DisplaySkeleton() {
  return (
    <div className="flex items-center space-x-4 mb-12">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}

function todaysDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export default function Tasks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState(searchParams.get("order") || "asc");
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const { tasks, setTasks } = useContext(TaskContext);

  // Update local state when URL parameters change (e.g., from pagination clicks)
  useEffect(() => {
    const urlOrder = searchParams.get("order") || "asc";
    const urlLimit = parseInt(searchParams.get("limit")) || 10;
    const urlPage = parseInt(searchParams.get("page")) || 1;

    setOrder(urlOrder);
    setLimit(urlLimit);
    setPage(urlPage);
  }, [searchParams]);

  // Update search params when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("order", order);
    params.set("limit", limit.toString());
    params.set("page", page.toString());
    setSearchParams(params);
  }, [order, limit, page, setSearchParams]);

  const { data, isError, isSuccess, isPending, error } = useFetchTasks({
    order,
    limit,
    page,
  });

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  return (
    <section className="flex flex-ro w-full p-4 gap-8 ">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-10/12 p-4 items-center">
          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: {todaysDate()}
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TaskCounter
                count={tasks ? tasks.pagination.meta.todoTasks : 0}
                type="todo"
              />
              <TaskCounter
                count={tasks ? tasks.pagination.meta.inProgressTasks : 0}
                type="inProgress"
              />
              <TaskCounter
                count={tasks ? tasks.pagination.meta.completedTasks : 0}
                type="completed"
              />
            </div>
            <FilterBar order={order} setOrder={setOrder} />

            {!data &&
              [...Array(limit)].map((_entry, index) => {
                return <DisplaySkeleton key={`${index}skel`} />;
              })}
            {data &&
              data.data.map((task) => (
                <Task
                  key={task._id}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  description={task.description}
                  dueDate={new Date(task.dueDate)}
                  id={task._id}
                />
              ))}
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
