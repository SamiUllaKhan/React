import {
  Stack,
  Flex,
  Image,
  Text,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  useColorMode,
  Button
} from '@chakra-ui/react'
import DarkModeSwitch from '../components/DarkModeSwitch'

export default function register() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Stack as="main" align="center">
        <Flex w="90%" p={3} m={1} justify="space-between">
          {colorMode === 'dark' ? (
            <Image src="/white.png.png" w="100px" alt="Logo" />
          ) : (
            <Image src="/white.png.png" w="100px" alt="Logo" />
          )}
          <DarkModeSwitch />
        </Flex>
        <Flex
          flexDirection="column"
          p={8}
          borderWidth="1px"
          borderRadius="lg"
          width="400px"
        >
          <Heading as="h5" size="sm" mb={10}>
            <Center mb={2}>Register Now!</Center>
            <Center>
              <Text fontSize="xs">
                We'll never share your information to any
              </Text>
            </Center>
          </Heading>

          <FormControl id="first-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input size="sm" placeholder="First name" />
          </FormControl>

          <FormControl id="middle-name">
            <FormLabel>Middle name</FormLabel>
            <Input size="sm" placeholder="Middle name" />
          </FormControl>

          <FormControl id="Last-name">
            <FormLabel>Last name</FormLabel>
            <Input size="sm" placeholder="Last name" />
          </FormControl>

          <FormControl id="country">
            <FormLabel>Country</FormLabel>
            <Select size="sm" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>

          <FormControl id="state">
            <FormLabel>State</FormLabel>
            <Input size="sm" placeholder="State" />
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input size="sm" placeholder="City" />
          </FormControl>

          <FormControl id="pincode">
            <FormLabel>Pincode / ZipCode</FormLabel>
            <Input size="sm" type="number" placeholder="Pincode / ZipCode" />
          </FormControl>

          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Address" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input size="sm" type="email" placeholder="Email address" />
          </FormControl>

          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input size="sm" type="number" placeholder="Mobile" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input size="sm" type="password" placeholder="Password" />
          </FormControl>

          <Button mt={5} colorScheme="teal" size="sm">Register</Button>

        </Flex>
      </Stack>
    </>
  )
}
