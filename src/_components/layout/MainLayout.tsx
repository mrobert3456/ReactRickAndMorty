import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <Box>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
export default MainLayout;
