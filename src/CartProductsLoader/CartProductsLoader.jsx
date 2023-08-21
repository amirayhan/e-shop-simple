import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedPorducts = await fetch("products.json");
    const products = await loadedPorducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProducts = products.find((pd) => pd.id === id);
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
};
export default CartProductsLoader;
