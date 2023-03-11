import { Box, Heading, VStack, Button, Spacer, Flex } from '@chakra-ui/react';
import SpecialsCard from './SpecialsCard'

const menus  =[
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and rosemary croutons.",
        price: "$12.99",
        getImageSrc: () => require("../assets/greeksalad.jpg")
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled sourdough bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        getImageSrc: () => require("../assets/bruchetta.jpg")
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        getImageSrc: () => require("../assets/lemondessert.jpg")
    },
];

const Specials = () => {
    return (
        <>
        <VStack
         isDarkBackground
         bg={'#edefee'}
         p={12}
         py={16}
         alignItems=""
         spacing={8}
         >
            <Box spacing={8} py={4}>
                <Flex
                 gap={'2'}
                >
                    <Heading
                     as="h1"
                     color={'#495e57'}
                     >
                        This Weeks Specials</Heading>
                    <Spacer />
                    <Button
                     color={'#333333'}
                     size={'lg'}
                     bg={'#f4ce14'}
                     _hover={{bg:'yellow.500'}}
                     >
                        Online Menu</Button>
                </Flex>
            </Box>
            <Box
             display="grid"
             gridTemplateColumns="repeat(3,minmax(0,1fr))"
             gridGap={8}>
                {menus.map((menu) => (
                    <SpecialsCard
                    key={menu.title}
                    title={menu.title}
                    description={menu.description}
                    imageSrc={menu.getImageSrc()}
                    price={menu.price}
                    />
                ))}
            </Box>
        </VStack>
        </>
    )
}

export default Specials