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
        if (item !== "") {
          return (
            <BreadcrumbItem
              id={`breadcrumb__${item}`}
              isCurrentPage={currentLocation.includes(item)}
              key={`breadcrumb__${item}`}
            >
              <BreadcrumbLink
                id={`breadcrumb__${item}__link`}
                as={Link}
                key={`breadcrumb__${item}__link`}
                to={
                  item === "Home"
                    ? "/"
                    : currentLocation.includes(item)
                    ? ""
                    : `/${item}`
                }
              >
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
