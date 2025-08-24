import { TaskPagination } from "../tasksPagination/taskPagination.jsx";
import { OrderSelect } from "../orderSelect/orderSelect.jsx";

export function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}
