import { Box, Center, HStack, IconButton } from "@chakra-ui/react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { PaginationProps } from "./table";

interface Props {
  id?: string;
  pagination: PaginationProps;
}
const Pagination: React.FC<Props> = ({ id, pagination }) => {
  const maxPages = Math.ceil(pagination.totalItems / pagination.pageSize);

  return (
    <Center>
      <HStack>
        <IconButton
          icon={<MdKeyboardDoubleArrowLeft />}
          aria-label="Previous page"
          isDisabled={pagination.page === 1}
          onClick={() =>
            pagination.onChange({
              page: pagination.page - 1,
              pageSize: pagination.pageSize,
            })
          }
        />

        <HStack>
          <Box>
            {(pagination.page - 1) * pagination.pageSize + 1} -
            {pagination.page * pagination.pageSize <= pagination.totalItems
              ? pagination.page * pagination.pageSize
              : pagination.totalItems}{" "}
            of {pagination.totalItems}
          </Box>
        </HStack>
        <IconButton
          icon={<MdKeyboardDoubleArrowRight />}
          aria-label="Next page"
          isDisabled={maxPages === pagination.page}
          onClick={() =>
            pagination.onChange({
              page: pagination.page + 1,
              pageSize: pagination.pageSize,
            })
          }
        />
      </HStack>
    </Center>
  );
};

export default Pagination;
