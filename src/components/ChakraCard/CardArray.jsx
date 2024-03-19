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
            {icon && (
              <Box
                w={["100%", "25%"]} // 100% on mobile, 25% on larger screens
                mr={["0", "5%"]} // No margin on mobile, 5% margin on larger screens
                className={`flex items-center justify-center ${IconClassName}`}
              >
                {icon}
              </Box>
            )}
            <Box w={icon ? ["100%", "75%"] : "100%"}>
              <Heading size="xs" textTransform="uppercase">
                {title}
              </Heading>
              <div className="flex gap-4">
                {text?.map((item, index) => (
                  <Box key={index}>
                    <Text
                      pt="2"
                      fontSize="sm"
                      className={`${classNameText} font-medium`}
                    >
                      {item}
                    </Text>
                  </Box>
                ))}
              </div>
            </Box>
          </Flex>
        </CardBody>
      </ChakraCard>
    </>
  );
}
