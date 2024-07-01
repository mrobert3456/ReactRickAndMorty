import { Link, useLocation, useParams } from "react-router-dom";
import { useGetCharacter } from "../../hooks/useGetCharacter";
import {
  Flex,
  SimpleGrid,
  Image,
  Divider,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
/* import { useGetEpisodes } from "../../hooks/useGetEpisodes"; */
import CustomBreadcrumb from "../layout/CustomBreadcrumb";
import SkeletonFlex from "../ui/SkeletonFlex";

export const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { data, isLoading, error } = useGetCharacter(id ? +id : 1);
  /*  const { data: episodes, isLoading: isEpisodesLoading } = useGetEpisodes(
    data?.episode.map((url: string) => +url.split("episode/")[1]),
    
  ); */

  return (
    <Flex flexDir="column" gap={2}>
      <Flex justifyContent="space-between">
        <Skeleton isLoaded={!isLoading}>
          <CustomBreadcrumb
            paths={["Home", ...location.pathname.split("/")]}
            currentLocation={location.pathname}
          />
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          <Button id="back_navigation__button" as={Link} to="/">
            Back to Home page
          </Button>
        </Skeleton>
      </Flex>
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
        <Stack id="profile_image" gridArea="image" gap={3}>
          <Skeleton boxSize="150px" isLoaded={!isLoading}>
            <Image
              src={data?.image}
              alt={`${data?.name}__image`}
              boxSize="150px"
              objectFit="cover"
            />
          </Skeleton>

          <Divider />

          <SkeletonFlex isLoaded={!isLoading} alignItems="center">
            <FaLocationDot />
            <Text>{data?.location.name}</Text>
          </SkeletonFlex>

          <SkeletonFlex isLoaded={!isLoading} as={Flex} gap={2} flexDir="row">
            <Text>Origin:</Text>
            <Text>{data?.origin.name}</Text>
          </SkeletonFlex>

          <SkeletonFlex isLoaded={!isLoading}>
            <Text>Gender:</Text>
            <Text>{data?.gender}</Text>
          </SkeletonFlex>

          <SkeletonFlex isLoaded={!isLoading}>
            <Text>Status:</Text>
            <Text>{data?.status}</Text>
          </SkeletonFlex>

          <SkeletonFlex isLoaded={!isLoading}>
            <Text>Species:</Text>
            <Text>{data?.species}</Text>
          </SkeletonFlex>

          <SkeletonFlex isLoaded={!isLoading}>
            <Text>Type:</Text>
            <Text>{data?.type ? data.type : "-"}</Text>
          </SkeletonFlex>
        </Stack>

        <Stack id="profile_info" gridArea="info">
          <SkeletonFlex isLoaded={!isLoading}>
            <Text fontSize="4xl" as="h1">
              {data?.name}
            </Text>
          </SkeletonFlex>

          <Stack gap={2}>
            <SkeletonFlex isLoaded={!isLoading} flexDir="column">
              <Text>Episodes:</Text>
              <Flex flexWrap="wrap" as={UnorderedList}>
                {data?.episode.map((url: string, index: number) => (
                  <ListItem
                    listStyleType="none"
                    id={`item_${index}`}
                    key={`item_${index}`}
                    maxW="20rem"
                  >
                    <Text>{url}</Text>
                  </ListItem>
                ))}
              </Flex>
            </SkeletonFlex>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};
