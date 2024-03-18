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
              w={["100%", "25%"]} // 100% on mobile, 25% on larger screens
              mr={["0", "5%"]} // No margin on mobile, 5% margin on larger screens
              className={`flex items-center justify-center ${IconClassName}`}
            >
              {icon}
            </Box>
            <Box w={["100%", "75%"]}>
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
