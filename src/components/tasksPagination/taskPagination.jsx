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

function extractQueryString(url) {
  const parsedURL = new URL(url);
  const params = new URLSearchParams(parsedURL.search);
  return params;
}

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
    links && links.next ? extractQueryString(links.next).get("order") : "asc";

  useEffect(() => {
    if (tasks) {
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
                isActive={index + 1 == meta.currentPage ? true : false}
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
