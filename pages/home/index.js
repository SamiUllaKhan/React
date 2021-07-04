import { Container, Flex, Box, Image, Grid, GridItem } from '@chakra-ui/react'

export default function home() {
  return (
    <Container maxWidth="100ch">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={3} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={2} colSpan={3} bg="tomato" />
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
      </Grid>

    

      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)"  gap={2}>
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <Image colSpan={5} src="/banner.jpg"  />
        <Image colSpan={1} src="/side1.jpg" />
      </Grid>

      <Flex>
        <Box p="4" width="20%" bg="red.400">
          Box 1
        </Box>
        <Box p="4" width="50%" bg="green.100"></Box>
        <Box p="4" width="30%" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </Container>
  )
}
