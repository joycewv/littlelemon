/**import {Link} from 'react-router-dom'; */

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