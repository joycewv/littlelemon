import { Box, Container, SimpleGrid, Stack, Image, Text, Link, Flex} from "@chakra-ui/react"

const Footer = () => {

    const handleClick =(Link) => () => {
        const id = `${Link}-form`;
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
         backgroundColor="#edefee"
         isDarkBackground
         p={8}
         alignItems="center"
         spacing={8}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid  columns={4} spacingX='40px' spacingY='20px' spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Image
                             src="/footerlogo.png"
                             alt="Little Lemon footer logo"
                             objectFit="cover"
                             w="136px"
                             h="240px"
                             gap="4"
                            />
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Company</Text>
                        <Link href={'#'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/menu'}>Menu</Link>
                        <Link onClick={handleClick("booking")}>Reservations</Link>
                        <Link href={'/orderonline'}>Order onlines</Link>
                        <Link href={'login'}>Login</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Contact Us</Text>
                        <Link href={'#'}>Address</Link>
                        <Link href={'#'}>Phone number</Link>
                        <Link href={'#'}>Email</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Social Media Links</Text>
                        <Link href={'https://www.facebook.com/'}>Facebook</Link>
                        <Link href={'https://www.instagram.com/'}>Instagram</Link>
                        <Link href={'https://www.linkedin.com/'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
        <Box
         backgroundColor="#edefee"
         >
            <Flex
             alignItems={'center'}
             justifyContent={'center'}
             maxWidth={'1024px'}
             margin={'0 auto'}
             px={'12'}
             heigh={'16'}
            >
                <Text>© 2023 Little Lemon Restaurant. All rights reserved</Text>
            </Flex>
        </Box>
        </>
    )
}

export default Footer