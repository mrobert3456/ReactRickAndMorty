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
    <Center id={id}>
      <HStack>
        <IconButton
          id="prev_page__button"
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
          id="next_page__button"
          icon={<MdKeyboardDoubleArrowRight />}
          aria-label="Next page"
          isDisabled={
            maxPages === pagination.page || pagination.totalItems === 0
          }
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
