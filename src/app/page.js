import { Box, Button, ButtonGroup, Divider, Heading, Stack, StackDivider } from "@chakra-ui/react";
import { Card, Text, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import Info from "./components/info.jsx";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 md:px-8 xl:px-10">
      <h1 className="mb-8 text-4xl font-bold text-white/60">Amo Colombia</h1>
      <h2 className="mb-8 text-2xl font-semibold text-white/40">
        Colombia es un país de América ubicado en la región noroccidental de
        América del Sur. Limita al este con Venezuela y Brasil, al sur con Perú
        y Ecuador, y al noroeste con Panamá; en cuanto a límites marítimos,
        limita con Panamá, Costa Rica, Nicaragua, Honduras, Jamaica, Haití,
        República Dominicana y Venezuela en el mar Caribe, y con Panamá, Costa
        Rica y Ecuador en el océano Pacífico. Su capital es Bogotá.
      </h2>
      <div className="grid w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Card title="General">
          <Info />
        </Card>
        <Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
<Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

      </div>
    </main>
  );
}