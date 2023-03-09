import { Box, Heading, VStack, Button, Spacer, Flex } from '@chakra-ui/react';
import SpecialsCard from './SpecialsCard'
/** alignment of the button can improve */

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
         backgroundColor="#edefee"
         isDarkBackground
         p={8}
         alignItems="center"
         spacing={8}
         >
            <Box alignItems="flex-start">
                <Flex
                 minWidth="max-content"
                 alignItems="center"
                 gap='2'
                >
                    <Heading
                     as="h1"
                     id="onlinemenu-form"
                     color="#495e57"
                     minWidth="max-content"
                     alignItems="flex-start"
                     >
                        This Weeks Specials</Heading>
                    <Spacer />
                    <Button
                     colorScheme="yellow"
                     width="45%"
                     fontSize="18pt"
                     fontWeight="600"
                     color="#333333"
                     backgroundColor="#f4ce14"
                     padding="25pt"
                     borderRadius="5pt"
                     minWidth="max-content"
                     alignItems="center"
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