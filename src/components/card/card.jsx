import React from "react";
import {
  Button,
  Card as DesignCard,
  CardBody,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";

const Card = ({ card }) => {
  return (
    <DesignCard maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <CardBody>
        <Heading as="h2" size="lg" color="teal.500">
          {card.title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {card.description}
        </Text>
        <ButtonGroup>
          <Button colorScheme="teal" variant="outline">
            Share
          </Button>
          <Button colorScheme="teal" variant="outline">
            Learn More
          </Button>
        </ButtonGroup>
      </CardBody>
    </DesignCard>
  );
};

export default Card;
