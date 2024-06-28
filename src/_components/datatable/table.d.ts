export interface Header<T> {
  key: string;
  header: string;
  render: (row: T) => JSX.Element | string;
}
export interface Pagination {
  page: number;
  pageSize: number;
}
export interface PaginationProps {
  onChange: (pagination: Pagination) => void;
  pageSize: number;
  page: number;
  totalItems: number;
}

interface ListInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
export interface PaginatedList<T> {
  list: T[];
  info: ListInfo;
}
