import { TaskPagination } from "../tasksPagination/taskPagination.jsx";

export function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <p>order</p>
      </nav>
    </>
  );
}
