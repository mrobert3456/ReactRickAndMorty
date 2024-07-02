import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props extends BreadcrumbProps {
  paths: string[];
  currentLocation: string;
}

const CustomBreadcrumb: React.FC<Props> = ({
  paths,
  currentLocation,
  ...restProps
}) => {
  return (
    <Breadcrumb {...restProps}>
      {paths.map((item: string) => {
        const label = item === "" ? "Home" : item;
        return (
          <BreadcrumbItem
            id={`breadcrumb__${label}`}
            isCurrentPage={currentLocation.includes(item) && item !== ""}
            key={`breadcrumb__${label}`}
          >
            <BreadcrumbLink
              id={`breadcrumb__${label}__link`}
              as={Link}
              key={`breadcrumb__${label}__link`}
              to={
                label === "Home"
                  ? "/"
                  : currentLocation.includes(item)
                  ? ""
                  : `/${item}`
              }
            >
              {item === "" ? "Home" : item}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
