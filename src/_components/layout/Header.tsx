import { Center, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavbarIconButton from "./NavbarIconButton";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      h={10}
      borderBottom="0.5px"
      pos="fixed"
      top={0}
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
      w="100%"
      zIndex={100}
    >
      <Link to={"/"}>
        <Center h={10} p={2}>
          Rick and Morty API
        </Center>
      </Link>
      <Spacer />
      <NavbarIconButton
        icon={colorMode === "light" ? WiDaySunny : WiNightClear}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
