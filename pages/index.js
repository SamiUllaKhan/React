import {
  Stack,
  Flex,
  Heading,
  Input,
  Button,
  Center,
  Image,
  useColorMode
} from "@chakra-ui/react";
import DarkModeSwitch from "../components/DarkModeSwitch"
import Link from 'next/link'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode);
  return (
    <>
      <Stack as="main" align="center">
        <Flex w="90%" p={3} m={1} justify="space-between">
        {colorMode === 'dark' ? <Image src="/white.png.png" w="100px" alt="Logo" /> :  <Image src="/vercel.svg" w="100px" alt="Logo" />}
         
          <DarkModeSwitch  />
        </Flex>

        <Flex flexDirection="column" p={10} borderWidth="1px" borderRadius="lg" width="400px">
            <Heading as="h5" size="sm" mb={10}>
              <Center>Login Here!</Center>
            </Heading>
          <Input mb={5} placeholder="SamiKhan1504@gmail.com" type="email" />
          <Input placeholder="*************" type="password" />
          <Button mt={3} colorScheme="teal" size="xs">
            Submit
          </Button>
          <Link href="/register">
            <a size="xs"> Register Now!</a>
          </Link>
        </Flex>
        <Flex justify="end">Developed By Sami</Flex>
      </Stack>
    </>
  );
}
