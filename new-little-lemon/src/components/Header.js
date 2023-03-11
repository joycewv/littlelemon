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
         bg={'#495e57'}
         alignItems={''}
         spacing={8}
         py={16}
         p={4}
        >
            <HStack
             p={10}
             py={4}
            >
                <VStack alignItems={'flex-start'} minWidth="max-content">
                    <Heading as="h1" color={'#edefee'} gap='4'>Little Memon</Heading>
                    <Spacer />
                    <Heading fontSize={'2xl'} color={'#edefee'}>Chicago</Heading>
                    <Spacer />
                    <Text fontSize={'lg'} color={'#edefee'}>We are a family owned Mediterranean restaurant, </Text>
                    <Text fontSize={'lg'} color={'#edefee'}>located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes</Text>
                    <Text fontSize={'lg'} color={'#edefee'}>served with a modern twist.</Text>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Button
                     onClick={handleClick("booking")}
                     color={'#333333'}
                     size={'lg'}
                     bg={'#f4ce14'}
                     _hover={{bg:'yellow.500'}}
                    >Reserve a Table</Button>
                </VStack>
            </HStack>
            <Spacer />
            <HStack p={10} py={40} spacing={8} minWidth="max-content" alignItems={'center'}>
                <Image
                 src={'/restaurantfood.jpg'}
                 alt={'Little Lemon restaurant cuisine'}
                 objectFit={'cover'}
                 boxSize="325px"
                 rounded={'lg'}
                 alignItems={'center'}
                 justifyContent={'center'}
                 />
            </HStack>
        </Flex>
        </>
    )
}

export default Header