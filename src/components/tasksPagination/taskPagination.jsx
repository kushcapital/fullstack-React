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
import { useSearchParams } from "react-router-dom";
import { TaskContext } from "@/context/tasks.context.jsx";
import { extractQueryString } from "@/lib/extractQueryString.js";

export function TaskPagination() {
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();
  const [searchParams] = useSearchParams();
  const { tasks, setTasks } = useContext(TaskContext);

  // Get current URL parameters
  const currentOrder = searchParams.get("order") || "asc";
  const currentLimit = parseInt(searchParams.get("limit")) || 10;
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Calculate previous and next page URLs
  const previousPage =
    currentPage > 1
      ? `limit=${currentLimit}&page=${currentPage - 1}&order=${currentOrder}`
      : "#";
  const nextPage =
    meta && currentPage < meta.totalPages
      ? `limit=${currentLimit}&page=${currentPage + 1}&order=${currentOrder}`
      : "#";

  useEffect(() => {
    if (tasks?.pagination?.links && tasks?.pagination?.meta) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);

  // Don't render pagination if we don't have proper data
  if (!meta || !meta.totalPages || meta.totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={`/tasks?${previousPage}`} />
        </PaginationItem>
        {meta &&
          [...Array(meta.totalPages)].map((items, index) => (
            <PaginationItem key={`pag${index}`}>
              <PaginationLink
                to={`/tasks?limit=${currentLimit}&page=${
                  index + 1
                }&order=${currentOrder}`}
                isActive={index + 1 === currentPage}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext to={`/tasks?${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
