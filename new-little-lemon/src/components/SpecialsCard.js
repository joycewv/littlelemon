import { VStack, Image, Heading, Text, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const SpecialsCard = ({title, description, imageSrc, price}) => {
    return (
        <>
        <VStack color={'black'} bg={'white'} cursor="pointer" rounded={'lg'}>
            <Image src={imageSrc} alt={title} rounded={'lg'}/>
            <VStack spacing={4} p={4} alignItems= {'flex-start'}>
                <HStack justifyContent= {'space-between'} alignItems={'center'} spacing={20}>
                    <Heading as="h3" size={'md'}>{title}</Heading>
                    <Heading as="h3" size={'md'} color={'#ee9972'}>{price}</Heading>
                </HStack>
                <Text color={'#495e57'} fontSize={'lg'}>{description}</Text>
                <HStack>
                    <Link to="/orderonlines" spacing={2} alignItems={'center'} fontWeight={'bold'}>Order a delivery</Link>
                </HStack>
            </VStack>
        </VStack>
        </>
    )
}

export default SpecialsCard