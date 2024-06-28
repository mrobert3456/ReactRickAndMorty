import { Box, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <Box>
      <Header />
      <Divider />
      <Box as="main" p="2rem">
        <Outlet />
      </Box>
    </Box>
  );
};
export default MainLayout;
