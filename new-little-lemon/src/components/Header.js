/**import {Link} from 'react-router-dom'; */
import { Box, Button, Heading, HStack, Img, VStack, Text,} from "@chakra-ui/react"; 

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
        <Box
         isDarkBackground
         backgroundColor="#495e57"
         alignItems="flex-start"
         spacing={8}
         py={16}
        >
            <HStack
             p={24} 
             alignItems="flex-start"
            >
                <VStack>
                    <Heading as="h1" color="#edefee">Little Memon</Heading>
                    <Heading as="h2" color="#edefee">Chicago</Heading>
                    <Text fontSize="xl" color="#edefee">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</Text>
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
            <HStack>
                <Img src='../assets/restrantfood.jpg'/>
            </HStack>

        </Box>
        <header className="hero-background">
            <article className="hero-container">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <br></br>
                    <button className='cta-button' href="#booking" onClick={handleClick("booking")}>Reserve a Table</button>
                </section>
                <section className="hero-image">
                    <img src={require('../assets/restaurantfood.jpg')} alt="Little Lemon restaurant cuisine"/>
                </section>
            </article>
        </header>
        </>
    )
}

export default Header