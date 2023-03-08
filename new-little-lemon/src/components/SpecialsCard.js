import { VStack, Image, Heading, Text, HStack } from "@chakra-ui/react"


const SpecialsCard = ({title, description, imageSrc, price}) => {
    return (
        <>
        <VStack color="black" backgroundColor="white" cursor="pointer" borderRadius="xl">
            <Image src={imageSrc} alt={title} borderRadius="xl"/>
            <VStack spacing={4} p={4} alignItems="flex-start">
                <HStack justifyContent="space-between" alignItems="center" spacing={20}>
                    <Heading as="h3" size="md">{title}</Heading>
                    <Heading as="h3" size="md" color="#ee9972">{price}</Heading>
                </HStack>
                <Text color="#495e57" fontSize="lg">{description}</Text>
                <HStack>
                    <p spacing={2} alignItems="center">Order a delivery</p>
                </HStack>
            </VStack>
        </VStack>
        </>
    )
}

export default SpecialsCard