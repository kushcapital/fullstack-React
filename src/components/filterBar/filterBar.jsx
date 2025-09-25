import { TaskPagination } from "../tasksPagination/taskPagination.jsx";
import { OrderSelect } from "../orderSelect/orderSelect.jsx";

export function FilterBar({ order, setOrder }) {
  return (
    <>
      <nav className="flex flex-row justify-between mb-8">
        <TaskPagination />
        <OrderSelect order={order} setOrder={setOrder} />
      </nav>
    </>
  );
}
