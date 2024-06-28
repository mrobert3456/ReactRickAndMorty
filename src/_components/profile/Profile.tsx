import { useLocation, useSearchParams } from "react-router-dom";
import { useGetCharacter } from "../../hooks/useGetCharacter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  SimpleGrid,
  Image,
  Divider,
  Stack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useGetEpisodes } from "../../hooks/useGetEpisodes";

export const Profile: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { data, isLoading, error } = useGetCharacter(+!searchParams.get("id"));
  /*  const { data: episodes, isLoading: isEpisodesLoading } = useGetEpisodes(
    data?.episode.map((url: string) => +url.split("episode/")[1]),
    
  ); */

  return (
    <Flex flexDir="column" gap={2}>
      <Breadcrumb>
        <BreadcrumbItem key={`breadcrumb__home`}>
          <BreadcrumbLink href={`/`}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {location.pathname.split("/").map((item: string) => {
          if (item !== "") {
            return (
              <BreadcrumbItem isCurrentPage key={`breadcrumb__${item}`}>
                <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          }
        })}
      </Breadcrumb>
      <SimpleGrid
        templateAreas={{
          base: `"image" "info"`,
          lg: `"image info"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 3fr",
        }}
        columns={{
          base: 1,
          lg: 2,
        }}
      >
        <Stack id="profile_image" gridArea={"image"} gap={3}>
          <Image
            src={data?.image}
            alt={`${data?.name}__image`}
            boxSize="150px"
            objectFit="cover"
          />

          <Divider />
          <Flex gap={2} alignItems="center">
            <FaLocationDot />
            <Text>{data?.location.name}</Text>
          </Flex>
          <Text>{data?.origin.name}</Text>
          <Text>{data?.gender}</Text>
          <Text>{data?.status}</Text>
          <Text>{data?.species}</Text>

          <Text>{data?.type}</Text>
        </Stack>

        <Stack id="profile_info" gridArea="info">
          <Text fontSize="4xl" as="h1">
            {data?.name}
          </Text>

          <Stack gap={2}>
            <Text>Episodes:</Text>
            <UnorderedList>
              {data?.episode.map((url: string, index: number) => (
                <ListItem
                  listStyleType="none"
                  id={`item_${index}`}
                  key={`item_${index}`}
                >
                  <Text>{url}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};
