import bags from "./bags.json";
import notebooks from "./notebooks.json";
import purse from "./purse.json";
import wallets from "./wallets.json";

export const getAllProducts = () => {
    let combinedJson = [bags, notebooks, purse, wallets];
    return combinedJson;
}

export const getProductsArray = () => {
    let arr = [];
    arr = [...arr, ...bags.products];
    arr = [...arr, ...notebooks.products];
    arr = [...arr, ...purse.products];
    arr = [...arr, ...wallets.products];

    return arr;
}

export const getProduct = (productId) => {
    const allProducts = getProductsArray();
    const product = allProducts.find(e => e.id === productId)
    return product;
}