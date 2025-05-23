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
        className={`w-full ${classNameCard || ""}`}
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.75)",
        }}
        color="white.500"
      >
        <CardBody padding={["12px", "16px"]}>
          <Flex w="full" flexDirection={["row"]} alignItems="flex-start">
            {icon && (
              <Box
                w={["15%", "25%"]} // 15% on mobile, 25% on larger screens
                mr={["3%", "5%"]} // 3% margin on mobile, 5% margin on larger screens
                className={`flex items-center justify-center ${IconClassName || ""}`}
              >
                {icon}
              </Box>
            )}
            <Box w={icon ? ["82%", "70%"] : "100%"}>
              <Heading
                size="xs"
                textTransform="uppercase"
                lineHeight={["1.2", "1.4"]}
              >
                {title}
              </Heading>
              <div className={classNameText || "flex flex-wrap gap-2 md:gap-4"}>
                {text?.map((item, index) => (
                  <Box key={index}>
                    <Text
                      pt="2"
                      fontSize={["xs", "sm"]}
                      className="font-medium"
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
