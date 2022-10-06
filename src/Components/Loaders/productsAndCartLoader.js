import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Get Product
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // Get Cart
    const savedCard = getStoredCart();
    const initialCart = [];
    for (const id in savedCard) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCard[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart};
}