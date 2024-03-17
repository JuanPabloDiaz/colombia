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

export default function CardDivider({
  mainHeading,
  boxTitleOne,
  boxTextOne,
  boxTitleTwo,
  boxTextTwo,
  classnameBoxTextTwo,
}) {
  return (
    <>
      <Card>
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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {boxTitleTwo}
              </Heading>
              <Text pt="2" fontSize="sm" className={classnameBoxTextTwo}>
                {boxTextTwo}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
