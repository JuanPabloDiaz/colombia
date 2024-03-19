import React from "react";
import {
  Box,
  Heading,
  Card,
  Text,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

export default function CardInfo({ title, subtitle, description }) {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.7)",
        }}
        color="white.500"
      >
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {subtitle}
            </Heading>
            <Text pt="4" pr="6" fontSize="lg">
              {description}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
