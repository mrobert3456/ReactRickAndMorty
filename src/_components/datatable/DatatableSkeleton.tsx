import {
  Box,
  Flex,
  Skeleton,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const DataTableSkeleton: React.FC = () => {
  return (
    <Box position="relative">
      <Box h="max-content" pos="relative" p="1rem">
        <Stack w="5rem">
          <Skeleton id="skeleton-title" height="20px" />
          <Skeleton id="skeleton-description" height="15px" />
        </Stack>
      </Box>

      <Flex id="skeleton-table-searchbar" w="100%">
        <Skeleton w="100%" h="2rem" />
      </Flex>

      <Table w="100%" variant="striped">
        <Thead pos="sticky">
          <Tr key={`skeleton-header__row`} h="3rem">
            {[1, 2, 3, 4, 5].map((index: number) => (
              <Th
                key={`skeleton-header_cell__${index}`}
                px="2.5rem"
                py="0.125rem"
              >
                <Flex justifyContent="space-between" w="100%">
                  <Skeleton id={`skeleton-row-${index}`} h="20px" w="4rem" />
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {[1, 2, 3, 4, 5].map((index: number) => (
            <Tr
              id={`skeleton-row__${index}`}
              key={`skeleton_row__${index}`}
              h="3rem"
            >
              {[1, 2, 3, 4, 5].map((index: number) => (
                <Td
                  key={`skeleton-row_cell__${index}`}
                  id={`skeleton-row_cell__${index}`}
                  px="2.5rem"
                  py="0.125rem"
                >
                  <Skeleton h="20px" w="4rem" />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTableSkeleton;
