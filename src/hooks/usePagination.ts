import { useState } from "react";
import { Pagination } from "../_components/datatable/table";

export const usePagination = () => {
  const [{ page, pageSize }, setPaginationProps] = useState<Pagination>({
    page: 1,
    pageSize: 20,
  });

  const onChange = (pagination: Pagination) => {
    setPaginationProps(pagination);
  };

  return { onChange, pageSize, page };
};
