import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
    return (
        <>
        <h1>This is a Footer</h1>
        <Box backgroundColor="#EDEFEE">
            <footer>
                <Flex
                 margin="0 auto"
                 px={12}
                 color="#333333"
                 justifyContent="center"
                 alignItems="center"
                 maxWidth="1024px"
                 height={16}
                 >
                    <p>Little Lemon Restaurant @ 2023</p>
                </Flex>
            </footer>
        </Box>
        </>
    )
}

export default Footer