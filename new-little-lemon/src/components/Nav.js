import { Box, HStack, Image, Link } from "@chakra-ui/react";
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
             position="fixed"
             top={0}
             left={0}
             right={0}
             translateY={0}
             transitionProperty={'transform'}
             transitionDuration= {'.3s'}
             transitionTimingFunction= {'ease-in-out'}
             bg={'#edefee'}
             ref={headerRef}
             >
            <Box color="#333333" maxWidth="1280px" margin="0 auto">
                <HStack
                  px={16}
                  py={4}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  >
                    <nav>
                        <HStack spacing={8} fontSize={'lg'}>
                            <Link href={'#'}>Home</Link>
                            <Link href={'/about'}>About</Link>
                            <Link href={'/menu'}>Menu</Link>
                            <Link onClick={handleClick("booking")}>Reservations</Link>
                            <Link href={'/orderonline'}>Order onlines</Link>
                            <Link href={'login'}>Login</Link>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack>
                            <Image src={require('../assets/logo.png')} alt={'logo'} width={'200'} height={'55'} />
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
        </>
    )
}


export default Nav