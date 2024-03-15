import React from "react";
import Card from "../card";
import { Center, Grid } from "@chakra-ui/react";

const CardList = ({ cards, columns }) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <Center>
      <Grid templateColumns={columns} gap="2rem" m="2rem">
        {cards?.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </Grid>
    </Center>
  );
};

export default CardList;
