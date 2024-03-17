import {
  Box,
  Heading,
  Card as ChakraCard,
  Text,
  CardBody,
} from "@chakra-ui/react";

export default function MyCard({
  title,
  text,
  className,
  icon,
  IconClassName,
}) {
  return (
    <>
      <ChakraCard className={`w-full ${className}`}>
        <CardBody>
          <Box className={`w-full ${IconClassName}`}>{icon}</Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {text}
            </Text>
          </Box>
        </CardBody>
      </ChakraCard>
    </>
  );
}
