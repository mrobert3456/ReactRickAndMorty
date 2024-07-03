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
  Tooltip,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useGetEpisodes } from "../../hooks/useGetEpisodes";
import CustomBreadcrumb from "../layout/CustomBreadcrumb";
import SkeletonFlex from "../ui/SkeletonFlex";
import { useEffect, useState } from "react";
import { getEpisodeNumberIdFromUrl } from "../utils/episodeUtils";
import { Episode } from "./profilData";

export const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { data, isLoading, isError, error } = useGetCharacter(id ? +id : 1);
  const [episodeIds, setEpisodeIds] = useState<number[] | null>(null);
  const {
    data: episodes,
    isLoading: isEpisodesLoading,
    isError: isEpisodeError,
    error: episodeError,
  } = useGetEpisodes(episodeIds || [], !!episodeIds);

  useEffect(() => {
    if (data) {
      const episodeIds = data.episode.map((url: string) => {
        return getEpisodeNumberIdFromUrl(url);
      });
      setEpisodeIds(episodeIds);
    }
  }, [data]);

  if (isError || isEpisodeError) {
    return (
      <Flex
        id={`error_${error?.code || episodeError?.code}`}
        justifyContent="center"
        margin="auto"
        backgroundColor="red"
        color="white"
        width="50%"
      >
        Error: {error?.message || episodeError?.message}
      </Flex>
    );
  }
  return (
    <Flex flexDir="column" gap={2}>
      <Flex justifyContent="space-between">
        <Skeleton isLoaded={!isLoading}>
          <CustomBreadcrumb
            paths={location.pathname.split("/")}
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
            <Text>{data?.type ? data?.type : "-"}</Text>
          </SkeletonFlex>
        </Stack>

        <Stack id="profile_info" gridArea="info">
          <SkeletonFlex isLoaded={!isLoading}>
            <Text fontSize="4xl" as="h1">
              {data?.name}
            </Text>
          </SkeletonFlex>

          <SkeletonFlex
            isLoaded={!isEpisodesLoading && !isLoading}
            flexDir="column"
          >
            <Text>Episodes:</Text>
            <Flex flexWrap="wrap" as={UnorderedList}>
              {episodes?.map((episode: Episode, index: number) => (
                <ListItem
                  listStyleType="none"
                  id={`episode_${index}__item`}
                  key={`episode_${index}__item`}
                  maxW="20rem"
                  w="20rem"
                  padding={2}
                >
                  <Tooltip id={`${episode.id}_episode`} label={episode.name}>
                    <Text isTruncated>
                      {episode.episode} : {episode.name}
                    </Text>
                  </Tooltip>
                </ListItem>
              ))}
            </Flex>
          </SkeletonFlex>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};
