import { Box, HStack } from "@chakra-ui/react";

const Nav = () => {
    return (
        <>
        <h1>This is a Nav</h1>
        <Box position="fixed" top={0} left={0} right={0} translateY={0} transitionProperty="transform" transitionDuration=".3s" transitionTimingFunction="ease-in-out" backgroundColor="#495E57
        ">
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
                    <nav>
                        <HStack>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/menu">Menu</a>
                        <a href="reservation">Reservation</a>
                        <a href="orderonline">Order Online</a>
                        <a href="login">Login</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
        </>
    )
}

/**
 *
                        <nav>
                            <HStack>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/menu">Menu</a>
                            <a href="reservation">Reservation</a>
                            <a href="orderonline">Order Online</a>
                            <a href="login">Login</a>
                            </HStack>
                        </nav>
                    </HStack>

                </Box>
            </Box>
 */
/**
 * 
 */

export default Nav