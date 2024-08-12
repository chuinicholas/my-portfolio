import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "./About.module.css";

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text> */}
          <div className={styles.skillBox}>
            {/* <Stack direction="row" spacing={4} align="center"> */}
            <Button colorScheme="teal" variant="outline">
              ReactJS
            </Button>
            <Button colorScheme="teal" variant="outline">
              ExpressJS
            </Button>
            <Button colorScheme="teal" variant="outline">
              NodeJS
            </Button>
            <Button colorScheme="teal" variant="outline">
              Firebase
            </Button>
            <Button colorScheme="teal" variant="outline">
              MaterialUI
            </Button>
            <Button colorScheme="teal" variant="outline">
              ChakraUI
            </Button>
            <Button colorScheme="teal" variant="outline">
              TailwindCSS
            </Button>
            {/* </Stack> */}
            {/* <Stack direction="row" spacing={4} align="center"> */}
            <Button colorScheme="teal" variant="outline">
              Bootstrap
            </Button>
            <Button colorScheme="teal" variant="outline">
              HTML
            </Button>
            <Button colorScheme="teal" variant="outline">
              CSS
            </Button>
            <Button colorScheme="teal" variant="outline">
              JavaScript
            </Button>
            <Button colorScheme="teal" variant="outline">
              MongoDB
            </Button>
            <Button colorScheme="teal" variant="outline">
              GitHub
            </Button>
            {/* </Stack> */}
          </div>
        </Stack>
      </Container>
    </>
  );
}
