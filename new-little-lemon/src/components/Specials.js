import { Box } from '@chakra-ui/react';
import SpecialsCard from './SpecialsCard'

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
        <section className="specials-section-container">
            <article className="specials-section-title">
                <h1>This Weeks Specials</h1>
                <section>
                    <button className='cta-button'>Online Menu</button>
                </section>
            </article>
            <br></br>
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
        </section>
        </>
    )
}

export default Specials