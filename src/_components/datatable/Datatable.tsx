import { PropsWithChildren } from "react";
import { Header, PaginationProps } from "./table";
import {
  Box,
  Flex,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import DynamicTableCell from "./DynamicTableCell";
import DataTableSkeleton from "./DatatableSkeleton";
import Search from "../Search/Search";
import Pagination from "./Pagination";

interface DataTableProps<T> {
  headers: Header<T>[];
  list: T[];
  error?: Error;
  isLoading?: boolean;
  isFetching?: boolean;
  pagination?: PaginationProps;
  searchText?: string;
  id?: string;
  filterRows?: React.ChangeEventHandler<HTMLInputElement>;
}

const DataTable = <T extends { id?: number }>({
  headers,
  list,
  error,
  isLoading,
  isFetching,
  pagination,
  searchText,
  id,
  filterRows,
}: PropsWithChildren<DataTableProps<T>>) => {
  if (isLoading) return <DataTableSkeleton />;

  const renderRow = (row: T, headers: Header<T>[], index: number) => {
    return (
      <Tr id={`row-${row.id}`} key={`row-${row.id}`}>
        {headers.map((header: Header<T>) => (
          <DynamicTableCell header={header} row={row} />
        ))}
      </Tr>
    );
  };

  return (
    <Box id={id}>
      <Box id="table__toolbar">
        <Flex justifyContent="flex-end">
          {filterRows && (
            <Search
              id="table_toolbar__searchbar"
              onChange={filterRows}
              value={searchText}
              size="lg"
            />
          )}
          {isFetching && <Spinner />}
        </Flex>
      </Box>
      <Table w="100%" variant="striped">
        <Thead pos="sticky">
          <Tr h="3rem">
            {headers.map((header: Header<T>) => (
              <Th key={header.key} px="2.5rem" py="0.125rem">
                <Flex justifyContent="space-between" w="100%">
                  {header.header}
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {list.length > 0 ? (
            list.map((row: T, index: number) => renderRow(row, headers, index))
          ) : (
            <Tr>
              <Td colSpan={headers.length}>
                <Box>Query returned no results</Box>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      {pagination && (
        <Pagination id="table_pagination" pagination={pagination} />
      )}
    </Box>
  );
};

export default DataTable;
