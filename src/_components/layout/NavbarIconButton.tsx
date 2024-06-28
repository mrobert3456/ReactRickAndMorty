import { Button, Center, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onClick: () => void;
  children?: React.ReactNode;
}

const NavbarIconButton: React.FC<Props> = ({ icon, onClick, children }) => {
  return (
    <Center w={10} h={10}>
      <Button onClick={onClick} variant="ghost" colorScheme="gray">
        <Icon w={10} h={10} p={1} as={icon} />
        {children}
      </Button>
    </Center>
  );
};

export default NavbarIconButton;
