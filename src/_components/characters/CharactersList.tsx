import { useCharactersFilter } from "../../hooks/useCharachtersFilter";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { usePagination } from "../../hooks/usePagination";
import DataTable from "../datatable/Datatable";
import { Character } from "./characters";

import { Headers } from "./headers";
const CharactersList: React.FC = () => {
  const pagination = usePagination();
  const [filter, characterFilterDispatch] = useCharactersFilter();
  const { data, isLoading, isFetching } = useGetCharacters(pagination, filter);

  const filterNames: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    characterFilterDispatch({ type: "SET_NAME", payload: event.target.value });
  };
  return (
    <div className="App">
      <DataTable<Character>
        headers={Headers}
        list={data?.list || []}
        isLoading={isLoading}
        filterRows={(e) => filterNames(e)}
        isFetching={isFetching}
        pagination={{
          ...pagination,
          totalItems: data?.info.count || 0,
        }}
      />
    </div>
  );
};

export default CharactersList;
