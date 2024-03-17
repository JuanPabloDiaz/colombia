import {
  Heading,
  Stack,
  Card,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

export default function CardHorizontal({
  imageUrl,
  imageAlt,
  title,
  text,
  buttonText,
}) {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={200}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{text}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              {buttonText}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
