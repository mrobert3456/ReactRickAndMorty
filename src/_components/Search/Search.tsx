import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

import { IoIosSearch, IoIosClose } from "react-icons/io";

interface SearchProps extends InputProps {
  onClear?: React.MouseEventHandler<HTMLDivElement>;
}

const Search: React.FC<SearchProps> = (props) => {
  const { onClear, value, width, ...inputProps } = props;

  return (
    <InputGroup>
      <InputLeftElement id="input-search__icon" h="100%">
        <IoIosSearch size="sm" />
      </InputLeftElement>

      {value!! && onClear && (
        <InputRightElement
          id="input-clear__icon"
          h="100%"
          cursor="pointer"
          onClick={onClear}
        >
          <IoIosClose size="lg" />
        </InputRightElement>
      )}

      <Input value={value} {...inputProps} />
    </InputGroup>
  );
};

export default Search;
