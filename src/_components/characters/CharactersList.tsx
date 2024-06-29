import { useCharactersFilter } from "../../hooks/useCharachtersFilter";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { usePagination } from "../../hooks/usePagination";
import DataTable from "../datatable/Datatable";
import { Character } from "./characters";

import { Headers } from "./headers";
const CharactersList: React.FC = () => {
  const pagination = usePagination();
  const [filter, characterFilterDispatch] = useCharactersFilter();
  const { data, isLoading, isFetching, error } = useGetCharacters(
    pagination,
    filter
  );

  const filterNames: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    characterFilterDispatch({ type: "SET_NAME", payload: event.target.value });
    pagination.onChange({ page: 1, pageSize: pagination.pageSize });
  };

  return (
    <DataTable<Character>
      id="charachters_table"
      headers={Headers}
      list={data?.list || []}
      isLoading={isLoading}
      filterRows={(e) => filterNames(e)}
      isFetching={isFetching}
      pagination={{
        ...pagination,
        totalItems: data?.info.count || 0,
      }}
      error={error}
      searchText={filter.name}
    />
  );
};

export default CharactersList;
