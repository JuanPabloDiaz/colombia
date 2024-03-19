import {
  Image,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Card,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

export default function CardDetail({
  title,
  description,
  nombreCientifico,
  buttonOne,
  buttonTwo,
  imageUrl,
  alt,
  imageWidth,
  imageHeight,
  imageStyle,
}) {
  // const twoWords = (str) => {
  //   let words = str.split(" ");
  //   if (words.length > 2) {
  //     return words.slice(0, 2).join(" ") + "...";
  //   } else {
  //     return words.join(" ");
  //   }
  // };
  const twoWords = (str = "") => {
    let words = str.split(" ");
    if (words.length > 2) {
      return words.slice(0, 2).join(" ") + "...";
    } else {
      return words.join(" ");
    }
  };

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={imageUrl}
            alt={alt}
            borderRadius="lg"
            width={imageWidth}
            height={imageHeight}
            objectFit={imageStyle}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text className="line-clamp-3">{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {twoWords(nombreCientifico)}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              {buttonOne}
            </Button>
            <Button variant="ghost" colorScheme="blue">
              {buttonTwo}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
