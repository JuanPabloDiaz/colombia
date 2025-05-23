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
      boxShadow="md"
      borderRadius="xl"
      bg="rgba(2, 6, 23, 0.7)"
      color="white.500"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "translateY(-2px) scale(1.02)",
        boxShadow: "lg",
        bg: "rgba(2, 6, 23, 0.85)",
      }}
      maxW="sm"
      minW={["auto", "250px"]}
      minH={["350px", "420px"]}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <CardBody p={[2, 4]}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 240,
            height: 240,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "0.75rem",
            background: "#222",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "0.75rem",
            }}
          >
            <Image
              src={showFallback ? fallbackImage : imageUrl}
              alt={alt || title || "Imagen"}
              width={240}
              height={240}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                borderRadius: "0.75rem",
                opacity: showFallback ? 0.65 : 1,
                transition: "opacity 0.2s",
              }}
            />
          </div>
        </div>
        <Stack mt={[3, 6]} spacing={[2, 3]} align="center">
          <Heading size={["sm", "md"]} textAlign="center" lineHeight={["1.3", "1.5"]}>
            {cropWords(title, titleWordsCount ?? 2)}
          </Heading>
          {badgeText && (
            <Badge colorScheme={badgeColor || "purple"} fontSize={["0.7em", "0.9em"]}>
              {badgeText}
            </Badge>
          )}
          <Text
            fontSize={["xs", "sm"]}
            color="white.400"
            noOfLines={[2, 3]}
            textAlign="center"
            lineHeight={["1.4", "1.6"]}
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider my={[1, 2]} borderColor="whiteAlpha.300" />
      <CardFooter p={[2, 4]}>
        <ButtonGroup spacing="2" width="100%" justifyContent="center">
          {/* Botón Ver más que redirige si hay viewMoreHref */}
          {viewMoreHref && (
            <Link href={viewMoreHref} passHref legacyBehavior>
              <Button 
                as="a" 
                colorScheme="teal" 
                variant="outline" 
                size="sm"
                fontSize={["xs", "sm"]}
                px={[2, 4]}
                py={[1, 2]}
              >
                Ver más
              </Button>
            </Link>
          )}
          {/* Botón secundario opcional */}
          {buttonTwo && (
            <Button 
              colorScheme="teal" 
              variant="outline" 
              size="sm"
              fontSize={["xs", "sm"]}
              px={[2, 4]}
              py={[1, 2]}
            >
              {buttonTwo}
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
