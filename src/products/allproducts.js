import bags from "./bags.json";
import notebooks from "./notebooks.json";
import purse from "./purse.json";
import wallets from "./wallets.json";

const getAllProducts = () => {
    let combinedJson = [bags, notebooks, purse, wallets];
    return combinedJson;
}

export default getAllProducts;