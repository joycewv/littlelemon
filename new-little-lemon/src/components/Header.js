import {Button, Heading, HStack, VStack, Text, Spacer, Flex, Image} from "@chakra-ui/react"; 

const Header = () => {

    const handleClick =(button) => () => {
        const id = `${button}-form`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <>
        <Flex
         isDarkBackground
         backgroundColor="#495e57"
         alignItems="center"
         spacing={8}
         py={16}
        >
            <HStack
             p={24}
             alignItems="flex-start"
            >
                <VStack alignItems="flex-start" minWidth="max-content">
                    <Heading as="h1" color="#edefee" gap='4'>Little Memon</Heading>
                    <Spacer />
                    <Heading as="h4" color="#edefee">Chicago</Heading>
                    <Spacer />
                    <Text fontSize="xl" color="#edefee">We are a family owned Mediterranean restaurant, </Text>
                    <Text fontSize="xl" color="#edefee">located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a</Text>
                    <Text fontSize="xl" color="#edefee">modern twist.</Text>
                    <Spacer />
                    <Button
                     onClick={handleClick("booking")}
                     colorScheme="yellow"
                     width="45%"
                     fontSize="18pt"
                     fontWeight="600"
                     color="#333333"
                     backgroundColor="#f4ce14"
                     padding="25pt"
                     borderRadius="5pt"
                    >Reserve a Table</Button>
                </VStack>
            </HStack>
            <Spacer />
            <HStack p={24} minWidth="max-content" alignItems='center'>
                <Image
                 src="/restaurantfood.jpg"
                 alt="Little Lemon restaurant cuisine"
                 objectFit="cover"
                 boxSize="325px"
                 />
            </HStack>
        </Flex>
        </>
    )
}

export default Header