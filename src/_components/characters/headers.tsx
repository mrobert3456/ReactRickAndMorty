import { Header } from "../datatable/table";
import { Image } from "@chakra-ui/react";
import { Character } from "./characters";
export const Headers: Header<Character>[] = [
  {
    key: "avatar",
    header: "Avatar",
    render: (item: Character) => (
      <Image
        src={item.image}
        alt={`${item.name}__image`}
        boxSize="100px"
        objectFit="cover"
      />
    ),
  },
  {
    key: "name",
    header: "Name",
    render: (item: Character) => item.name,
  },
  {
    key: "species",
    header: "Species",
    render: (item: Character) => item.species,
  },
  {
    key: "status",
    header: "Status",
    render: (item: Character) => item.status,
  },
];
