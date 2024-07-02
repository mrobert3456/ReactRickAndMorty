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
  Text,
} from "@chakra-ui/react";
import DataTableSkeleton from "./DatatableSkeleton";
import Search from "../Search/Search";
import Pagination from "./Pagination";
import { AxiosError } from "axios";

interface DataTableProps<T> {
  headers: Header<T>[];
  list: T[];
  error?: AxiosError | null;
  isLoading?: boolean;
  isFetching?: boolean;
  pagination?: PaginationProps;
  searchText?: string;
  id?: string;
  filterRows?: React.ChangeEventHandler<HTMLInputElement>;
  filterPlaceholder?: string;
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
  filterPlaceholder,
}: PropsWithChildren<DataTableProps<T>>) => {
  if (isLoading && searchText !== "") return <DataTableSkeleton />;

  const renderRow = (row: T, headers: Header<T>[]) => {
    return (
      <Tr id={`row__${row.id}`} key={`row__${row.id}`}>
        {headers.map((header: Header<T>, index: number) => (
          <Td
            id={`row${row.id}-cell_${index}_${header.key}`}
            key={`row${row.id}-cell_${index}_${header.key}`}
          >
            {header.render(row)}
          </Td>
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
              placeholder={filterPlaceholder}
            />
          )}
          {isFetching && (
            <Spinner position="absolute" alignSelf="center" right={10} />
          )}
        </Flex>
      </Box>
      <Table id="table" w="100%" variant="striped">
        <Thead pos="sticky" id="table__header">
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

        <Tbody id="table__body">
          {list.length > 0 && !error ? (
            list.map((row: T) => renderRow(row, headers))
          ) : (
            <Tr id="row-no-data" key="row-no-data">
              <Td
                id="row-cell-no-data"
                key={"row-cell-no-data"}
                colSpan={headers.length}
              >
                <Text textAlign="center">Query returned no results</Text>
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
