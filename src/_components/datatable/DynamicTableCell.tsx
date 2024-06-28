import { Td } from "@chakra-ui/react";
import { Header } from "./table";

interface DynamicTableCellProps<T> {
  row: T;
  header: Header<T>;
}

const DynamicTableCell = <T extends { id?: number }>({
  row,
  header,
}: DynamicTableCellProps<T>) => {
  return (
    <Td id={`row_${row.id}_${header.key}`} key={`${row.id}_${header.key}`}>
      {header.render(row)}
    </Td>
  );
};

export default DynamicTableCell;
