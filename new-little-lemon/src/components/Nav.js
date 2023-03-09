import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Nav = () => {

    const headerRef = useRef(null);
    useEffect (() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleClick =(anchor) => () => {
        const id = `${anchor}-form`;
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
             position="fixed"
             top={0}
             left={0}
             right={0}
             translateY={0}
             transitionProperty="transform"
             transitionDuration=".3s"
             transitionTimingFunction="ease-in-out"
             backgroundColor="#EDEFEE"
             ref={headerRef}
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
                        <a href="#booking" onClick={handleClick("booking")}>Reservation</a>
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