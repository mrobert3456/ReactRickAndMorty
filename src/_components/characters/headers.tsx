import { Header } from "../datatable/table";
import { Image } from "@chakra-ui/react";
import { Character } from "./characters";
import { Link } from "react-router-dom";
export const Headers: Header<Character>[] = [
  {
    key: "avatar",
    header: "Avatar",
    render: (item: Character) => (
      <Image
        src={item.image}
        alt={`${item.name}__image`}
        boxSize="50px"
        objectFit="cover"
      />
    ),
  },
  {
    key: "name",
    header: "Name",
    render: (item: Character) => (
      <Link to={`profile/${item.id}`}>{item.name}</Link>
    ),
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
