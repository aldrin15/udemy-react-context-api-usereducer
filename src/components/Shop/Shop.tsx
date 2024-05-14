const Shop = ({ children }) => {
    return (
        <section id="shop">
            <h2>Elegant Clothing for Everyone</h2>

            <ul id="products">{children}</ul>
        </section>
    )
}

export default Shop
