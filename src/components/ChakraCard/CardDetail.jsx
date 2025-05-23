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

import Link from "next/link";

export default function CardDetail({
  title,
  description,
  subtitle,
  buttonOne,
  buttonTwo,
  viewMoreHref,
  imageUrl,
  alt,
  imageWidth,
  imageHeight,
  imageStyle,
  badgeColor,
  badgeText,
  imageFailed,
  titleWordsCount,
  fallbackAvatar,
}) {
  const cropWords = (str = "", count = 2) => {
    let words = str.split(" ");
    if (words.length > count) {
      return words.slice(0, count).join(" ") + "...";
    } else {
      return words.join(" ");
    }
  };

  let fallbackImage = "/assets/images/fallbackImage.jpg";
  if (fallbackAvatar) {
    fallbackImage = "/assets/images/avatar.png";
  }
  const showFallback = imageFailed || !imageUrl || imageUrl === "";

  return (
    <Card
      boxShadow="lg"
      borderRadius="xl"
      bg="rgba(2, 6, 23, 0.7)"
      color="white.500"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "translateY(-4px) scale(1.03)",
        boxShadow: "2xl",
        bg: "rgba(2, 6, 23, 0.85)",
      }}
      maxW="sm"
      minW="250px"
      minH="420px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <CardBody p={4}>
        <div
          style={{
            position: "relative",
            width: 240,
            height: 240,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "1rem",
            background: "#222",
            margin: "0 auto",
          }}
        >
          <Image
            src={showFallback ? fallbackImage : imageUrl}
            alt={alt || title || "Presidente de Colombia"}
            width={240}
            height={240}
            objectFit="cover"
            borderRadius="1rem"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              borderRadius: "1rem",
              opacity: showFallback ? 0.65 : 1,
              transition: "opacity 0.2s",
            }}
          />
        </div>
        <Stack mt="6" spacing="3" align="center">
          <Heading size="md" textAlign="center">
            {cropWords(title, titleWordsCount ?? 2)}
          </Heading>
          {badgeText && (
            <Badge colorScheme={badgeColor || "purple"} fontSize="0.9em">
              {badgeText}
            </Badge>
          )}
          <Text
            fontSize="sm"
            color="white.400"
            noOfLines={3}
            textAlign="center"
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider my={2} borderColor="whiteAlpha.300" />
      <CardFooter>
        <ButtonGroup spacing="2" width="100%" justifyContent="center">
          {/* Botón Ver más que redirige si hay viewMoreHref */}
          {viewMoreHref && (
            <Link href={viewMoreHref} passHref legacyBehavior>
              <Button as="a" colorScheme="teal" variant="outline" size="sm">
                Ver más
              </Button>
            </Link>
          )}
          {/* Botón secundario opcional */}
          {buttonTwo && (
            <Button colorScheme="teal" variant="outline" size="sm">
              {buttonTwo}
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
