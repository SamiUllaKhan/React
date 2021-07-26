import {
    InputGroup,
    InputLeftElement,
    Flex,
    Input,
    Button,
    Image,
    Spacer,
    useColorMode
  } from "@chakra-ui/react";
  
import { SearchIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Link from "next/link";

export default function Navbar()  {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
        <Flex>
        <Flex w="100%">
          <Flex p={3} m={1} align="center" w="100%">
            <Link href="/" passHref>
              <a variant="ghost" aria-label="Home" my={5}>
                {colorMode === "dark" ? (
                  <Image src="/white.png.png" w="100px" alt="Logo" />
                ) : (
                  <Image src="/white.png.png" w="100px" alt="Logo" />
                )}
              </a>
            </Link>
            <Spacer />

            <Flex top="1em" right="1em" align="center">
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
            </Flex>
            <Spacer />
            <InputGroup w="50%">
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="text" placeholder="Search the products" />
            </InputGroup>
            <Spacer />

            <DarkModeSwitch />
          </Flex>
        </Flex>
      </Flex>
        </>
    )
}
