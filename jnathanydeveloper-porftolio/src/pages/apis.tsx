import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Grid,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Dashboard() {

    return (
        <Box w="100%">
          <Header />
          <Box maxWidth={1220} margin="0 auto">
            <Text as="h1" fontSize="4xl">
                Comece aqui</Text>
            <Text as="h2" fontSize="1xl" mb="10">
              Incie escolhendo uma das opções abaixo que deseja.
            </Text>
    
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Card maxW="sm">
                <CardBody>
                  <Image src="/skills.png" alt="skills" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Text as="h2" fontSize="2xl">
                      Avaliações e Habilidades
                    </Text>
                    <Text color="gray.500">
                      Faça um simulado para validar seus conhecimentos em sua stack
                      atual. É uma forma de medir nosso conhecimento e melhorar com
                      os feedbacks recebido.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      //onClick={}
                      variant="solid"
                      bg="brand.500"
                      p={3}
                      px={10}
                      fontSize="1xl"
                      textColor="white"
                      borderRadius={5}
                      mt="5"
                    >
                      Começar
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Card maxW="sm">
                <CardBody>
                  <Image src="/enterview.png" alt="enterview" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Text as="h2" fontSize="2xl">
                      Simulados para processos seletivos
                    </Text>
                    <Text color="gray.500">
                      Faça simulados de processo seletivos e prepara-se para
                      conseguir a vaga que almeja. Através do simulado você pode se
                      preparar para vagas futuras.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      //onClick={}
                      variant="solid"
                      bg="brand.500"
                      p={3}
                      px={10}
                      fontSize="1xl"
                      textColor="white"
                      borderRadius={5}
                      mt="5"
                    >
                     Começar
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Card maxW="sm">
                <CardBody>
                  <Image src="/roadmap.png" alt="roadmap" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Text as="h2" fontSize="2xl">
                      Roadmap para seu perfil
                    </Text>
                    <Text color="gray.500">
                      Não sabe o que estudar ou caminho a seguir? Monte um roadmap
                      de estudos e aprofunde-se ainda mais na sua stack.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button  variant="solid" bg="brand.500" p={3} // COLOCAR EVENTO DE CLICK
                      px={10}
                      fontSize="1xl"
                      textColor="white"
                      borderRadius={5}
                      mt="5"
                    >
                     Começar
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Grid>
          </Box>
        </Box>
      );
}