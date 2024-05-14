import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'
import { DUMMY_PRODUCTS } from './dummy-products.js'
import CartContextProvider from './components/Store/shopping-cart-context'

const App = () => {
    return (
        <CartContextProvider>
            <Header />
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product} />
                    </li>
                ))}
            </Shop>
        </CartContextProvider>
    )
}

export default App
