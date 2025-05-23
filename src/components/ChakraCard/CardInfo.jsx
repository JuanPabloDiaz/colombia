// import { useState } from "react";

import React from "react";
import {
  Box,
  Heading,
  Card,
  Text,
  CardHeader,
  CardBody,
  Button,
} from "@chakra-ui/react";

export default function CardInfo({ title, subtitle, description }) {
  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.7)",
        }}
        color="white.500"
      >
        <CardHeader padding={["12px", "20px"]}>
          <Heading size={["sm", "md"]} lineHeight={["1.2", "1.4"]}>
            {title}
          </Heading>
        </CardHeader>
        <CardBody padding={["12px", "20px"]}>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {subtitle}
            </Heading>
            <Text
              pt={["2", "4"]}
              pr={["2", "6"]}
              fontSize={["md", "lg"]}
              lineHeight={["1.4", "1.6"]}
            >
              {description}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
