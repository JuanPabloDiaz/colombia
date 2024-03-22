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
  Badge,
} from "@chakra-ui/react";

export default function CardDetail({
  title,
  description,
  subtitle,
  buttonOne,
  buttonTwo,
  imageUrl,
  alt,
  imageWidth,
  imageHeight,
  imageStyle,
  badgeColor,
  badgeText,
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
      <Card
        // maxW="sm"
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.7)",
        }}
        color="white.500"
      >
        <CardBody>
          <Image
            // src={imageUrl}
            // src="/assets/images/avatar.png"
            src={imageUrl ?? "/assets/images/avatar.png"}
            alt={alt}
            borderRadius="lg"
            width={imageWidth}
            height={imageHeight}
            objectFit={imageStyle}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color="green.600" fontSize="sm">
              {twoWords(subtitle)}
            </Text>
            <Text className="line-clamp-3">{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <Stack direction="row">
          <Badge colorScheme={badgeColor}>{badgeText}</Badge>
        </Stack>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="gray">
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
