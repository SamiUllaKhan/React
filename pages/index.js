import {
  Spacer,
  Stack,
  Flex,
  Heading,
  Input,
  Button,
  Center,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Link from 'next/link'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex w="90%" p={3} m={1}>
        <Flex top="1em" right="1em" justify="space-between">
          <Flex>
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5}>
                {colorMode === 'dark' ? (
                  <Image src="/white.png.png" w="100px" alt="Logo" />
                ) : (
                  <Image src="/white.png.png" w="100px" alt="Logo" />
                )}
              </Button>
            </Link>
            
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5}>
                Home
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5}>
                Products
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5}>
                About Us
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5}>
                Contact Us
              </Button>
            </Link>
            <DarkModeSwitch />
          </Flex>
        </Flex>
      </Flex>
      <Stack as="main" align="center">
        <Flex
          flexDirection="column"
          p={8}
          borderWidth="1px"
          borderRadius="lg"
          width="400px"
        >
          <Heading as="h5" size="sm" mb={10}>
            <Center mb={2}>Login Here!</Center>
            <Center>
              <Text fontSize="xs">Login will help us to server better</Text>
            </Center>
          </Heading>
          <Input mb={5} placeholder="SamiKhan1504@gmail.com" type="email" />
          <Input placeholder="*************" type="password" />
          <Button mt={3} colorScheme="teal" size="sm">
            Submit
          </Button>
          <Link href="/register" passHref>
            <Text fontSize="sm" mt={1}>
              {' '}
              Register Now!
            </Text>
          </Link>
        </Flex>

        <Flex justify="end">Developed By Sami</Flex>
      </Stack>
    </>
  )
}
