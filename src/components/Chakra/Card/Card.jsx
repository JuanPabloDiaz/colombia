import {
  Box,
  Heading,
  Card as ChakraCard,
  Text,
  CardBody,
  Flex,
} from "@chakra-ui/react";

export default function MyCard({
  title,
  text,
  classNameText,
  classNameCard,
  icon,
  IconClassName,
}) {
  return (
    <>
      <ChakraCard
        className={`w-full ${classNameCard}`}
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.75)",
        }}
        color="white.500"
      >
        <CardBody>
          <Flex w="full">
            <Box
              w="25%"
              mr="5%"
              className={`flex items-center justify-center ${IconClassName}`}
            >
              {icon}
            </Box>
            <Box w="75%">
              <Heading size="xs" textTransform="uppercase">
                {title}
              </Heading>
              <Text pt="2" fontSize="sm" className={classNameText}>
                {text}
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </ChakraCard>
    </>
  );
}
