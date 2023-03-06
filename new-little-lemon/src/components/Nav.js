import { Box, HStack } from "@chakra-ui/react";

const Nav = () => {
    return (
        <>
        <h1>This is a Nav</h1>
        <Box
             position="fixed"
             top={0}
             left={0}
             right={0}
             translateY={0}
             transitionProperty="transform"
             transitionDuration=".3s"
             transitionTimingFunction="ease-in-out"
             backgroundColor="#EDEFEE"
             >
            <Box color="#333333" maxWidth="1280px" margin="0 auto">
                <HStack
                  px={16}
                  py={4}
                  justifyContent="space-between"
                  alignItems="center"
                  >
                    <nav>
                        <HStack spacing={8}>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/menu">Menu</a>
                        <a href="reservation">Reservation</a>
                        <a href="orderonline">Order Online</a>
                        <a href="login">Login</a>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack>
                            <img src={require('../assets/logo.png')} alt="logo" width="200" height="55" />
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