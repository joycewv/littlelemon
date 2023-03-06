/**import {Link} from 'react-router-dom'; */

const Header = () => {
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
                    <button className='cta-button'>Reserve a Table</button>
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