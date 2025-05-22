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
  imageFailed
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

  const fallbackImage = "/assets/images/avatar.png";
  const showFallback = imageFailed;

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
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Image
            src={showFallback ? fallbackImage : imageUrl}
            alt={alt || title || "Presidente de Colombia"}
            width={imageWidth || 300}
            height={imageHeight || 300}
            objectFit={imageStyle || "cover"}
            borderRadius="lg"
            mx="auto"
            style={{ aspectRatio: '1/1', width: '100%', maxWidth: 240, minHeight: 180, background: '#222' }}
          />
          {showFallback && (
            <Badge
              colorScheme="red"
              position="absolute"
              top={2}
              right={2}
              zIndex={2}
              fontSize="0.8em"
              px={2}
              borderRadius="md"
              bg="rgba(220,38,38,0.8)"
            >
              Imagen no disponible
            </Badge>
          )}
        </div>
        <Stack mt="6" spacing="3" align="center">
          <Heading size="md" textAlign="center">{twoWords(title)}</Heading>
          {badgeText && (
            <Badge colorScheme={badgeColor || "purple"} fontSize="0.9em">
              {badgeText}
            </Badge>
          )}
          <Text fontSize="sm" color="white.400" noOfLines={3} textAlign="center">
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider my={2} borderColor="whiteAlpha.300" />
      <CardFooter>
        <ButtonGroup spacing="2" width="100%" justifyContent="center">
          {buttonOne && <Button colorScheme="teal" variant="outline" size="sm">{buttonOne}</Button>}
          {buttonTwo && <Button colorScheme="teal" variant="outline" size="sm">{buttonTwo}</Button>}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
