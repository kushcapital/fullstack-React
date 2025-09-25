import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "@/context/tasks.context.jsx";
import { extractQueryString } from "@/lib/extractQueryString.js";

export function TaskPagination() {
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();
  const { tasks, setTasks } = useContext(TaskContext);

  const previousPage =
    links && links.previous
      ? extractQueryString(links.previous).toString()
      : "#";
  const nextPage =
    links && links.next ? extractQueryString(links.next).toString() : "#";
  const order =
    links && links.next
      ? extractQueryString(links.next).get("order")
      : links && links.previous
      ? extractQueryString(links.previous).get("order")
      : "asc";

  useEffect(() => {
    if (tasks?.pagination) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/tasks?${previousPage}`} />
        </PaginationItem>
        {meta &&
          [...Array(meta.totalPages)].map((items, index) => (
            <PaginationItem key={`pag${index}`}>
              <PaginationLink
                href={`/tasks?limit=${meta.itemsPerPage}&page=${
                  index + 1
                }&order=${order}`}
                isActive={index + 1 === meta.currentPage}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext href={`/tasks?${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
