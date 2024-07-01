import { Flex, FlexProps, Skeleton, SkeletonProps } from "@chakra-ui/react";

type SkeletonFlexProps = SkeletonProps | FlexProps;

const SkeletonFlex: React.FC<SkeletonFlexProps> = ({ children, ...props }) => {
  return (
    <Skeleton as={Flex} flexDir="row" gap={2} {...props}>
      {children}
    </Skeleton>
  );
};
export default SkeletonFlex;
