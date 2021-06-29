import { useColorMode, IconButton,Text } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"


const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
   <>
    <IconButton
      aria-label="Toggle Dark Switch"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      size="xs"
      ml={2}
      bg="none"
      borderRadius="lg"
    />
   </>
  )
}

export default DarkModeSwitch
