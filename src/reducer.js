export const initialState = {
    basket: [
        {
            id: "161202",
            title: "Dummy Title with Amazon",
            price: 10000.00,
            rating: 10,
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1250%2F3061%2Ffiles%2Fwhite-amazon-logo-png-6_1024x1024.png%3Fv%3D1539106025&f=1&nofb=1"
        }, {
            id: "161202",
            title: "Mummy Title with Amazon",
            price: 10000.00,
            rating: 10,
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1250%2F3061%2Ffiles%2Fwhite-amazon-logo-png-6_1024x1024.png%3Fv%3D1539106025&f=1&nofb=1"
        }
    ],
    user: null
};

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => (item.price + amount), 0);


const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // LOGIN FOR ADDING ITEM TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;

        case 'REMOVE_FROM_BASKET':
            // LOGIN FOR REMOVING ITEM TO BASKET
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state, basket: newBasket
            };
            break;
        default:
            return state;
    }
}

export default reducer;
