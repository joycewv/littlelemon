

const SpecialsCard = ({title, description, imageSrc, price}) => {
    return (
        <>
        <section className="special-card">
            <section className="special-card-container" cursor="pointer">
                <article className="special-card-image-container">
                    <img src={imageSrc} alt={title}/>
                </article>
                <article className="special-card-text">
                    <section className="special-card-title">
                        <h3>{title}</h3>
                        <h3 className="price-tag">{price}</h3>
                    </section>
                    <section>
                        <p>{description}</p>
                    </section>
                    <section>
                        <a href="/">Order a delivery</a>
                    </section>

                </article>

            </section>

        </section>
        </>
    )
}

export default SpecialsCard