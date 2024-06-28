export interface Header<T> {
  key: string;
  header: string;
  render: (row: T) => JSX.Element | string;
}
interface Pagination {
  page: number;
  pageSize: number;
}
export interface PaginationProps {
  pageSizes?: number[];
  onChange: (pagination: Pagination) => void;
  pageSize: number;
  page: number;
  totalItems: number;
}
