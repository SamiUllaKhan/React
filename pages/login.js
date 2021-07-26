import {
  Stack,
  Flex,
  Heading,
  Input,
  Button,
  Center,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
export default function Home() {
  return (
    <>
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
            <a variant="ghost" aria-label="Home" my={5}>
              <Text fontSize="sm" mt={1}>
                Register Now!
              </Text>
            </a>
          </Link>
        </Flex>

        <Flex justify="end">Developed By Sami</Flex>
      </Stack>
    </>
  )
}
