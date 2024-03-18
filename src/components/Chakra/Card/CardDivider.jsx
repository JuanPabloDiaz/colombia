import {
  Box,
  StackDivider,
  Heading,
  Stack,
  Card,
  Text,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

import globals from "@/styles/globals.css";

export default function CardDivider({
  mainHeading,
  boxTitleOne,
  boxTextOne,
  boxTitleTwo,
  boxTextTwo,
  classnameBoxTextTwo,
  boxTitleThree,
  boxTextThree,
  classnameBoxTextThree,
}) {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.7)",
        }}
        color="white.500"
      >
        <CardHeader>
          <Heading size="md">{mainHeading}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {boxTitleOne}
              </Heading>
              <Text pt="4" pr="6" fontSize="lg">
                {boxTextOne}
              </Text>
            </Box>
            <Box display="flex" flexDirection="row" w="full">
              <Box w="45%" mr="5%">
                <Heading size="xs" textTransform="uppercase">
                  {boxTitleTwo}
                </Heading>
                <Text
                  pt="2"
                  fontSize="sm"
                  className={classnameBoxTextTwo}
                  sx={{
                    backgroundColor: "rgba(151, 152, 160, 0.913)",
                  }}
                >
                  {boxTextTwo}
                </Text>
              </Box>
              <Box w="50%">
                <Heading size="xs" textTransform="uppercase">
                  {boxTitleThree}
                </Heading>
                <Text
                  pt="2"
                  fontSize="sm"
                  className={classnameBoxTextThree}
                  sx={{
                    backgroundColor: "rgba(151, 152, 160, 0.913)",
                  }}
                >
                  {boxTextThree}
                </Text>
              </Box>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
