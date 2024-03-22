import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

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
            <Text
              pt="4"
              pr="6"
              fontSize="lg"
              className={`overflow-hidden transition-all duration-200 ${isExpanded ? "h-auto" : "h-40"}`}
              style={{
                lineHeight: "1.3rem",
                textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
              }}
            >
              {description}
            </Text>

            <Text onClick={() => setIsExpanded(!isExpanded)}>Read More</Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
